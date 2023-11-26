const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')

router.get('/:ed', userCntrl.show)

module.exports = router;