const router = require('express').Router();
const passport = require('passport');
const userCntrl = require('../controllers/users')

router.get('/:userID', userCntrl.show) // Render a users individual page
router.get('/:userID/edit', userCntrl.edit) // Render the edit user page
// NOTE TO SELF - NEED TO REDIRECT HERE IF USER DOES NOT HAVE A PROFILE NAME 

module.exports = router;