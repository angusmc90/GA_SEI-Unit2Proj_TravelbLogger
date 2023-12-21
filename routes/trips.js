const router = require('express').Router();
const passport = require('passport');
const tripsCntrl = require('../controllers/trips')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/', tripsCntrl.index) // BEEF NOTE: Render the view of all trips
router.get('/new', tripsCntrl.new) // BEEF NOTE: Render new trip form page
router.post('/', tripsCntrl.create) // BEEF NOTE: Create new trip doc and render index page
router.get('/:tripID', tripsCntrl.show) // BEEF NOTE: Render a specific trip page

module.exports = router;

// BEEF NOTE 10/21
// Add a post method for /:tripID here that the excursion form will redirect thru 
// not sure if i used that right? look up the res.redirect method later
// that can then render the trip.get to go back to the trip show page
// why did i not think of this before?

// eventual feature - add excursions from a index page or all excursions
// - form from there will ask a user to select a trip to add the excursion too
// - or had a HOMETOWN/DAYTRIP section for people who dont/cant leave their local areas