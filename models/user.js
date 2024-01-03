const mongoose = require('mongoose');

const bloggerUserSchema = new mongoose.Schema({
    profileName: String,
    name: String,
    // BEEF NOTE:
    // login only happening via google & OAuth, so googleID needed
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

