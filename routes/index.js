const router = require('express').Router();
const passport = require('passport');

// BEEF NOTE: 
// the functions below were mostly provided inside of a boiler plate and i had such trouble with the oauth im afraid to adjust them into a prettier format

// BEEF NOTE:
// Render the login page
router.get('/', function (req, res) {
  res.render('index');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { 
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

// console.log('checking oauth')

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/trips', // where do you want the client to go after you login 
    failureRedirect: '/' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
