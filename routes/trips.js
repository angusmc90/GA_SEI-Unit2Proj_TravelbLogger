const router = require('express').Router();
const tripsCntrl = require('../controllers/trips')
const assignLocals = require('../controllers/locals')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/', assignLocals.isLoggedIn, tripsCntrl.index) // Render the view of all trips
router.get('/new', assignLocals.isLoggedIn, tripsCntrl.new) // Render new trip form page
router.post('/', assignLocals.isLoggedIn, tripsCntrl.create) // Create new trip doc and render index page
router.get('/:tripID', assignLocals.isLoggedIn, tripsCntrl.show) // Render a specific trip page
router.get('/edit/:tripID', assignLocals.isLoggedIn, tripsCntrl.edit) // Edit a specific page
router.post('/:tripID', assignLocals.isLoggedIn, tripsCntrl.update) // Edit a specific page

module.exports = router;

// BEEF NOTE 10/21
// Add a post method for /:tripID here that the excursion form will redirect thru 
// not sure if i used that right? look up the res.redirect method later
// that can then render the trip.get to go back to the trip show page
// why did i not think of this before?

// eventual feature - add excursions from a index page or all excursions
// - form from there will ask a user to select a trip to add the excursion too
// - or had a HOMETOWN/DAYTRIP section for people who dont/cant leave their local areas