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
    actualMoodLog: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MoodTrip", moodTripSchema);