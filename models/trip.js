const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    tripName: String,
    tripStart: Date,
    tripEnd: Date,
    // coverShot: String <- when ready to add photos
    highlight: String,
    places: Array,
    favorite: Boolean,
    user: String,
    userPFPic: String,
    userID: String,
    // excursions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Excursion'}],
}, {
    timstamps: true
});


module.exports = mongoose.model('Trip', tripSchema)
