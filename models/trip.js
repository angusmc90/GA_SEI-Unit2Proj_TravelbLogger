const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    tripName: String,
    tripStart: Date,
    tripEnd: Date,
    highlight: String,
    places: Array,
    favorite: Boolean,
}, {
    timstamps: true
});


module.exports = mongoose.model('Trip', tripSchema)

// {
//     type: String,
//     required: true
// }