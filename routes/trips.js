const router = require('express').Router();
const passport = require('passport');
const tripsCntrl = require('../controllers/trips')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/', tripsCntrl.index) // BEEF NOTE: Render the view of all trips
router.get('/new', tripsCntrl.new) // BEEF NOTE: Render new trip form page
router.post('/', tripsCntrl.create) // BEEF NOTE: Create new trip doc and render index page
router.get('/:tripID', tripsCntrl.show) // BEEF NOTE: Render a specific trip page

module.exports = router;