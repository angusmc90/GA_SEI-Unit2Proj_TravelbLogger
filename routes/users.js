const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')

router.get('/:userID', userCntrl.show) // BEEF NOTE: Render a users individual page

module.exports = router;