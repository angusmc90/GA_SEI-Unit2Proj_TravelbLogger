const TripModel = require("../models/trip");
// will need to rename 
// local or something idk

// the req.params only works with the fucntion being called with that request route

module.exports = {
  user,
  urlIDs
}

function user (req, res, next) {
  // console.log('ORIGINAL URL')
  // console.log(req.originalUrl)
  // maybe eventually figure out how to split this up?

    res.locals.user = req.user; 
    // assigning a property to res.locals, makes that said property (user) available in every single ejs view
    next();
}


async function urlIDs (req, res, next) {
    // console.log("- BOUNCER FUNCTION -")
    // console.log("Route:")
    // console.log(req.originalUrl)
    // console.log("Params:")
    console.log(req.params)
    const relTrip = await TripModel.findById(req.params.tripID)
    res.locals.relTrip = relTrip
    // console.log("all local variables")
    // console.log(res.locals)

    // NOTE FOR SELF - COME BACK TO THIS ABOUT MAP TO LOCALS EASILY ALL AT ONCE
    next()
  }