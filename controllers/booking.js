const Booking = require("../models/booking.js");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
    const { checkIn, checkOut, guests, totalPrice } = req.body.booking;
     const listingId = req.params.id;   

    const listing = await Listing.findById(req.params.id);
    if (listing.owner.equals(req.user._id)) {
        req.flash("error", "You cannot book your own listing!");
        return res.redirect(`/listings/${listing._id}`);
    }

    const booking = new Booking({
      listing: listing._id,
      user: req.user._id,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    });
    
    await booking.save();
    // After booking save
    const matches = await Booking.find({
    listing: booking.listing,
    user: { $ne: req.user._id },
    status: { $nin: ["cancelled"] },
    checkIn:  { $lte: booking.checkOut },
    checkOut: { $gte: booking.checkIn }
  }).populate("user", "username");

  req.flash("success", 
    matches.length > 0
      ? `Booking confirmed! ${matches.length -1} other traveler(s) visiting same time!`
      : "Booking confirmed! You're the first one here"
  );
    res.redirect(`/bookings`);
};


module.exports.showBooking = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate("listing");

    const validBookings = bookings.filter(b => b.listing);

    // For each booking, find overlapping bookings by OTHER users
    const bookingsWithMatches = await Promise.all(
        validBookings.map(async (b) => {
            const matches = await Booking.find({
                listing: b.listing._id,
                user: { $ne: req.user._id },
                status: { $nin: ["cancelled"] },
                checkIn:  { $lt: new Date(b.checkOut.getTime() - 86400000) },
                checkOut: { $gt: new Date(b.checkIn.getTime()  + 86400000) } 
            }).populate("user", "username");

            return { booking: b, matches };
        })
    );

    res.render("bookings/index", { bookings: validBookings, bookingsWithMatches });
};


module.exports.cancelBooking = async (req, res) => {
    await Booking.findByIdAndUpdate(req.params.id, { status: "cancelled" });
    req.flash("success", "Booking cancelled successfully");
    res.redirect("/bookings");
};

// module.exports.deleteBooking = async (req, res) => {
//   const { bookingId } = req.params;

//   await Booking.findByIdAndDelete(bookingId);

//   req.flash("success", "Trip cancelled");
//   res.redirect("/bookings");
// };