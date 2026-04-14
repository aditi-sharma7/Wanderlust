const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const moodTripController = require("../controllers/moodTrip");

// Show mood planner form
router.get("/", isLoggedIn, moodTripController.renderForm);

// Generate trip via AI
router.post("/generate", isLoggedIn, wrapAsync(moodTripController.generateTrip));

// Save trip to DB
router.post("/save", isLoggedIn, wrapAsync(moodTripController.saveTrip));

// User's mood trip history
router.get("/history", isLoggedIn, wrapAsync(moodTripController.getHistory));

// Log actual mood after trip
router.patch("/:id/log", isLoggedIn, wrapAsync(moodTripController.logMood));

// Delete a mood trip
router.delete("/:id", isLoggedIn, wrapAsync(moodTripController.deleteTrip));

module.exports = router;