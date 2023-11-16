const router = require('express').Router();
// const passport = require('passport');
const tripsCntrl = require('../controllers/trips')

router.get('/trips', tripsCntrl.index)

module.exports = router;