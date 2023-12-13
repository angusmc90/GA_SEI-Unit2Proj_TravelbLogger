const mongoose = require('mongoose');

const excursionSchema = new mongoose.Schema({
    name: String,
    date: Date,
    about: String,
    coverPic: String,
    // photos: [String], | BEEF NOTE: feature not added yet
    city: String,
    country: String,
    highlights: String,
    recommends: Boolean,
    // BEEF NOTE: figure out the best way to store the below in the model.
    // maybe as a single nested object?
    // ----
    // trip: String,
    // user: String,
    // userPFPic: String,
    // userID: String,
}, {
    timstamps: true
});


module.exports = mongoose.model('Excursion', excursionSchema)
