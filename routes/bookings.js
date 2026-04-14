const express = require("express");
const router = express.Router({ mergeParams: true });
const Booking = require("../models/booking");
const {isLoggedIn, validateBooking} = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const bookingController = require("../controllers/booking.js");

router.post(
  "/:id/bookings",
  isLoggedIn,
  validateBooking,
  wrapAsync(bookingController.createBooking)
);

router.get(
  "/",
  isLoggedIn,
  wrapAsync(bookingController.showBooking)
);
router.post(
  "/:id/cancel",
   isLoggedIn, 
   wrapAsync(bookingController.cancelBooking)
);

// router.delete(
//   "/:bookingId",
//   isLoggedIn,
//   wrapAsync(bookingController.deleteBooking)
// );


// router.get("/cleanup", async (req, res) => {
//   await Booking.deleteMany({ listing: { $exists: false } });
//     await Booking.deleteMany({ listing: null });
//   res.send("Invalid bookings deleted");
// });

module.exports = router;