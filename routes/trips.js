const router = require('express').Router();
const passport = require('passport');
const tripsCntrl = require('../controllers/trips')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/', tripsCntrl.index)
router.get('/new', tripsCntrl.new)
router.post('/', tripsCntrl.create)
router.get('/:tripID', tripsCntrl.show)

module.exports = router;