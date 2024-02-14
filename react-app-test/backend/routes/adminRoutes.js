const express = require("express");
const router = express.Router();
const multer = require('multer');
const Cars = require("../models/Cars");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Add new car
router.post('/addcar', upload.single('image'), async (req, res) => {
    try {
        const { name, company, type, capacity, fueltype, rate } = req.body;
        const image = req.file.buffer.toString('base64');
        const newCar = new Cars({ name, company, type, capacity, fueltype, rate, image });
        await newCar.save();
        res.json({ success: true, message: "Car added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Update car
router.put('/updatecar/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const updatedCar = await Cars.findByIdAndUpdate(carId, req.body, { new: true });
        if (!updatedCar) {
            return res.status(404).json({ success: false, message: 'Car not found' });
        }
        res.json({ success: true, data: updatedCar });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Delete car
router.delete('/deletecar/:id', async (req, res) => {
    try {
        const carId = req.params.id;
        const deletedCar = await Cars.findByIdAndDelete(carId);
        if (!deletedCar) {
            return res.status(404).json({ success: false, message: 'Car not found' });
        }
        res.json({ success: true, message: 'Car deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
