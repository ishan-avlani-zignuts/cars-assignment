const mongoose = require('mongoose');

//in this table user id, car id, city, state, startdate, enddate, starttime, endtime

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
  },
  city: String,
  state:  String,
  startDate: Date,
  endDate:  Date,
  startTime:  String,
  endTime:  String,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
