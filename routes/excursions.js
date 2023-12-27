const router = require('express').Router();
const passport = require('passport');
const excursionsCntrl = require('../controllers/excursions')
const assignLocals = require('../controllers/locals')


// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/new', assignLocals.urlIDs, excursionsCntrl.new) // BEEF NOTE: new excursion form
router.post('/', excursionsCntrl.create) // BEEF NOTE: create new excursion doc

module.exports = router;