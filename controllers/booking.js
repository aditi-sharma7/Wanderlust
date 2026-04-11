const Booking = require("../models/booking.js");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
    const { checkIn, checkOut, guests, totalPrice } = req.body.booking;
     const listingId = req.params.id;   

    const listing = await Listing.findById(req.params.id);
    const booking = new Booking({
      listing: listing._id,
      user: req.user._id,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    });
    
    await booking.save();
    req.flash("success", "Booking Done!")
    res.redirect(`/bookings`);
};

module.exports.showBooking = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing");
    
    res.render("bookings/index", { bookings });
};
module.exports.deleteBooking = async (req, res) => {
  const { bookingId } = req.params;

  await Booking.findByIdAndDelete(bookingId);

  req.flash("success", "Trip cancelled");
  res.redirect("/bookings");
};