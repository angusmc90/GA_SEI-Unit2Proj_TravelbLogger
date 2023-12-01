const router = require('express').Router();
const passport = require('passport');
const excursionsCntrl = require('../controllers/excursions')

router.get('/new', excursionsCntrl.new)

module.exports = router;