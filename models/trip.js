const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tripName: String,
    tripStart: Date,
    tripEnd: Date,
    // coverShot: String, | BEEF NOTE: add photos feature not added yet
    highlight: String,
    places: Array,
    favorite: Boolean,
    user: String,
    userPFPic: String,
    userID: String,
    excursions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Excursion'}],
}, {
    timstamps: true
});


module.exports = mongoose.model('Trip', tripSchema)
