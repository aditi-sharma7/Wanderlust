const mongoose = require("mongoose");

const itineraryDaySchema = new mongoose.Schema({
  day: Number,
  plan: String,
});

const moodTripSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moodInput: {
      type: String,
      required: true,
      trim: true,
    },
    moodLabel: {
      type: String,
      default: "Custom",
    },
    destination: String,
    tagline: String,
    palette: [String],
    itinerary: [itineraryDaySchema],
    moodTags: [String],

    bestTimeToVisit: {
      months: [String],
      weather: String,
      avoidMonths: [String],
      avoidReason: String,
    },

    packingList: {
      essentials: [String],
      clothing: [String],
      accessories: [String],
      toiletries: [String],
      documents: [String],
    },

    actualMoodLog: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MoodTrip", moodTripSchema);