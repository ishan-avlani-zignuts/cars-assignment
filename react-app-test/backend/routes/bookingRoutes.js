const express = require("express");
const router = express.Router();
const Booking = require("../models/Book");

// Book a car
router.post('/bookcar', async (req, res) => {
    try {
        const { carId, userId, city, state, startDate, endDate, startTime, endTime } = req.body;
        const booking = new Booking({ car: carId, user: userId, city, state, startDate, endDate, startTime, endTime });
        await booking.save();
        res.json({ success: true, message: "Booking successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
