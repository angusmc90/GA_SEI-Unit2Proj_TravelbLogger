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
    bLogger: {type: mongoose.Schema.Types.ObjectId, ref: 'BLoggerUser'},
    // excursions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Excursion'}],
}, {
    timstamps: true
});


module.exports = mongoose.model('Trip', tripSchema)

// {
//     type: String,
//     required: true
// }