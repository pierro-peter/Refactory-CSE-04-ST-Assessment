// controllers/BookingController.js

const booking = require('../models/passenger');

// Handle GET request to render the booking form
exports.getBookingForm = (req, res) => {
  res.render('index'); // Adjust the view name if necessary
};

// Handle POST request for form submission
exports.submitBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.redirect('/success'); // Redirect to a success page or similar
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).send('Server error');
  }
};
