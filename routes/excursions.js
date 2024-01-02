const router = require('express').Router();
const passport = require('passport');
const excursionsCntrl = require('../controllers/excursions')
const assignLocals = require('../controllers/locals')


// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/new', assignLocals.isLoggedIn, excursionsCntrl.new) // BEEF NOTE: new excursion form
router.post('/create', assignLocals.isLoggedIn, excursionsCntrl.create) // BEEF NOTE: create new excursion doc
router.get('/:excursionID', assignLocals.isLoggedIn, excursionsCntrl.show) // BEEF NOTE: render an excursion page
router.get('/edit/:excursionID', assignLocals.isLoggedIn, excursionsCntrl.edit) // BEEF NOTE: render a page to edit excursion page

module.exports = router;