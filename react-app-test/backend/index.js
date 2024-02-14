const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoDB } = require("./db");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoDB();

// Routes
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/booking', bookingRoutes);

app.listen(port, () => console.log(`App started and listening on ${port}`));
