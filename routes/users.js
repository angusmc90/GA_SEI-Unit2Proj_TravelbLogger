const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')
const assignLocals = require('../controllers/locals')

router.get('/:userID', assignLocals.isLoggedIn, userCntrl.show) // Render a users individual page
router.get('/:userID/edit', assignLocals.isLoggedIn, userCntrl.edit) // Render the edit user page
// NOTE TO SELF - NEED TO REDIRECT HERE IF USER DOES NOT HAVE A PROFILE NAME 
router.post('/:userID', assignLocals.isLoggedIn, userCntrl.update) // Update Mongo Doc & redirect

module.exports = router;