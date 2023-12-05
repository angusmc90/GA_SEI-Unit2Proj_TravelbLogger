const mongoose = require('mongoose');

const excursionSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    name: String,
    date: Date,
    about: String,
    coverPic: String,
    // photos: [String], NOT ADDED YET
    city: String,
    country: String,
    highlights: String,
    recommends: Boolean,
    user: String,
    userPFPic: String,
    userID: String,
    // excursions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Excursion'}],
}, {
    timstamps: true
});


module.exports = mongoose.model('Excursion', excursionSchema)
