// will need to rename 
// local or something idk

// the req.params only works with the fucntion being called with that request route

module.exports = {
  user,
  urlIDs
}

function user (req, res, next) {
    res.locals.user2 = req.user; 
    // assigning a property to res.locals, makes that said property (user) available in every single ejs view
    next();
}


function urlIDs (req, res, next) {
    console.log("- BOUNCER FUNCTION -")
    console.log("Route:")
    console.log(req.originalUrl)
    console.log("Params:")
    console.log(req.params)
    res.locals.tripID = req.params.tripID
    console.log("all local variables")
    console.log(res.locals)
    next()
  }