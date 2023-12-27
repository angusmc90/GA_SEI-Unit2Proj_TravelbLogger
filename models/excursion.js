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
    tripID: String,
    tripName: String,
    userID: String,
    user: String,
    userPFPic: String,
    // comments: [],
    // --
    // --
    // BEEF NOTE: figure out the best way to store the below in the model.
    // maybe as a single nested object?
    // ----
    // relTrip: {
    //     tripID: String,
    //     tripName: String,
    // },
    // relUser: {
    //     userID: String,
    //     user: String,
    //     userPFPic: String,
    // }
}, {
    timstamps: true
});


module.exports = mongoose.model('Excursion', excursionSchema)
