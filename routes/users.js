const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')

// when the path below is called, execute the corresponding method functions defined in the controller
router.get('/:id', userCntrl.show)

module.exports = router;