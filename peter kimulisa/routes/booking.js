const express = require('express');
const multer = require('multer');
const path = require('path');
const Passenger = require('../models/passenger');
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); // Directory to save the uploaded files
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // File name format
  }
});

const upload = multer({ storage: storage });

// Route to render the booking form
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/'));
});

// Route to handle form submission
router.post('/submitBooking', upload.single('visaDocument'), async (req, res) => {
  try {
    const newPassenger = new Passenger({
      fullName: req.body.fullName,
      gender: req.body.gender,
      dob: req.body.dob,
      nationality: req.body.nationality,
      phone: req.body.phone,
      email: req.body.email,
      pobox: req.body.pobox,
      emergencyPhone: req.body.emergencyPhone,
      passportNumber: req.body.passportNumber,
      visaDocument: req.file.path, // Save the file path
      departureCity: req.body.departureCity,
      destination: req.body.destination
    });

    await newPassenger.save();
    res.send('Booking successfully submitted!');
  } catch (error) {
    res.status(500).send('Error submitting booking: ' + error.message);
  }
});

module.exports = router;
