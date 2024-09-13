const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pobox: String,
  emergencyPhone: {
    type: String,
    required: true
  },
  passportNumber: {
    type: String,
    required: true
  },
  visaDocument: {
    type: String, // This will store the file path or URL
    required: true
  },
  departureCity: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Passenger', passengerSchema);
