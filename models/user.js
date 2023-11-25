const mongoose = require('mongoose');

const bloggerUserSchema = new mongoose.Schema({
    // Creating googleID first
    // There won't be any log-ins without OAuth
    name: String,
    profileName: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    hometown: String,
    trips: [{type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}],
    faveTrip: String,
    faveExcursion: String,
    bucketList: [String]
}, {
    timstamps: true
});


module.exports = mongoose.model('BLoggerUser', bloggerUserSchema)

