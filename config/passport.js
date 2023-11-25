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
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    let user = await UserModel.findOne({googleId: profile.id});
    // console.log(`user is ${user} profile id is ${profile.id}`)
    // console.log(`callback is ${cb}`)

    if (user){
      console.log("if user exists function passed")
      return cb(null, user);
    } 
    console.log('No User Found, I am creating a user!');
    try {
      user = await UserModel.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      })
      console.log("user was created")

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



