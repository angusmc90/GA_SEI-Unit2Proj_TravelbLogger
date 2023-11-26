const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')

router.get('/:id', userCntrl.show)

module.exports = router;