const router = require('express').Router();
const passport = require('passport');
const tripsCntrl = require('../controllers/trips')

router.get('/', tripsCntrl.index)
router.get('/new', tripsCntrl.new)
router.post('/', tripsCntrl.create)
router.get('/:id', tripsCntrl.show)

module.exports = router;