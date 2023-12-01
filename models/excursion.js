const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    xrsnName: String,
    xrsnDate: Date,
    xrsnAbout: String,
    // coverShot: String <- when ready to add photos
    xrsnNotes: String,
    xrsnCity: String,
    xrsnCountry: String,
    user: String,
    userPFPic: String,
    userID: String,
    // excursions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Excursion'}],
}, {
    timstamps: true
});


module.exports = mongoose.model('Trip', tripSchema)
