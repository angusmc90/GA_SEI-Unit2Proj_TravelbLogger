const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require('../models/user')
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // BEEF NOTE:
    // When user logs in with google, search DB if that user exists
    let user = await UserModel.findOne({googleId: profile.id});
    // BEEF NOTE:
    // If the user exists, call back the previous function, and pass along the user document
    if (user){
      return cb(null, user);
    } 

    // BEEF NOTE:
    // If the user doesn't exist, create a new user
    try {
      user = await UserModel.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      })
      // BEEF NOTE:
      // Then call back the previous function and pass along the created user documemnt
      return (cb, user)

    } catch(err) {
      console.log(err);
      cb(err)
    }

  }
));

passport.serializeUser(function(user, cb){
  cb(null, user._id)
});

passport.deserializeUser(async function(id, cb) {
  try {
    const userDoc = await UserModel.findById(id);
    cb(null, userDoc)
  } catch (err) {
    cb(err)
  }
});



