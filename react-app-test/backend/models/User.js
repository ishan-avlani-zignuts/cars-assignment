// in this table 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    number : String,
});

const User = mongoose.model('User', userSchema,'users');
module.exports = User;

