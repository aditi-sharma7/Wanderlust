const MoodTrip = require("../models/moodTrip");
const ExpressError = require("../utils/ExpressError");
// const cohere = require("cohere-ai");

// cohere.init(process.env.COHERE_API_KEY);


// Render the mood planner page
module.exports.renderForm = (req, res) => {
  res.render("moodTrip/index");
};

// Generate trip using Anthropic API

module.exports.generateTrip = async (req, res) => {
  try {
    const { moodInput, moodLabel } = req.body;

    if (!moodInput || moodInput.trim() === "") {
      throw new ExpressError(400, "Mood input is required");
    }

    const response = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "command-r7b-12-2024",
        messages: [
          {
            role: "system",
            content: `You are a mood-based travel planner for India only. 
      Suggest ONLY destinations within India (cities, hill stations, beaches, heritage sites).
      Never suggest any destination outside India.
      Return ONLY a valid JSON object (no markdown, no backticks, no explanation).`,
          },
          {
            role: "user",
            content: `The traveler wants to feel: "${moodInput}".
      Suggest a trip within India only. Return ONLY this JSON structure:
      {
        "destination": "City, State, India",
        "tagline": "one evocative sentence about why this Indian destination matches the mood",
        "palette": ["#hex1", "#hex2", "#hex3", "#hex4"],
        "itinerary": [
          { "day": 1, "plan": "short activity description" },
          { "day": 2, "plan": "short activity description" },
          { "day": 3, "plan": "short activity description" }
        ],
        "moodTags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
      }`,
          },
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Cohere API error:", errText);
      throw new ExpressError(500, "Failed to get response from Cohere");
    }

    const data = await response.json();

    // Cohere Chat API v2 response structure
    const raw = data?.message?.content?.[0]?.text;

    if (!raw) {
      console.error("Unexpected Cohere response:", JSON.stringify(data));
      throw new ExpressError(500, "Invalid response from Cohere");
    }

    // Extract JSON object safely
    const jsonMatch = raw.replace(/```json|```/g, "").trim().match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("No JSON found in Cohere response:", raw);
      throw new ExpressError(500, "Could not extract JSON from Cohere response");
    }

    let result;
    try {
      result = JSON.parse(jsonMatch[0]);
    } catch (parseErr) {
      console.error("Failed to parse Cohere response:", raw);
      throw new ExpressError(500, "Invalid JSON from Cohere");
    }

// Safety check — ensure destination is in India
const isIndia = result.destination?.toLowerCase().includes("india");
if (!isIndia) {
  console.error("Non-India destination returned:", result.destination);
  throw new ExpressError(500, "Only Indian destinations are supported");
}

    res.json({ success: true, result, moodInput, moodLabel });

  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong. Please try again.");
    res.redirect("back");
  }
};
// Save generated trip to MongoDB
module.exports.saveTrip = async (req, res) => {
  const { moodInput, moodLabel, destination, tagline, palette, itinerary, moodTags } = req.body;

  const trip = new MoodTrip({
    author: req.user._id,
    moodInput,
    moodLabel,
    destination,
    tagline,
    palette: JSON.parse(palette),
    itinerary: JSON.parse(itinerary),
    moodTags: JSON.parse(moodTags),
  });

  await trip.save();
  req.flash("success", "Trip saved to your Mood DNA!");
  res.redirect("/mood/history");
};

// Show all saved mood trips of current user
module.exports.getHistory = async (req, res) => {
  const trips = await MoodTrip.find({ author: req.user._id }).sort({ createdAt: -1 });
  res.render("moodTrip/history", { trips });
};

// Log actual mood after returning from trip
module.exports.logMood = async (req, res) => {
  const { id } = req.params;
  const { actualMoodLog } = req.body;

  const trip = await MoodTrip.findOne({ _id: id, author: req.user._id });
  if (!trip) throw new ExpressError(404, "Trip not found");

  trip.actualMoodLog = actualMoodLog;
  await trip.save();

  req.flash("success", "Mood log saved!");
  res.redirect("/mood/history");
};

// Delete a mood trip
module.exports.deleteTrip = async (req, res) => {
  const { id } = req.params;
  await MoodTrip.findOneAndDelete({ _id: id, author: req.user._id });
  req.flash("success", "Trip deleted!");
  res.redirect("/mood/history");
};