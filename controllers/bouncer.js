// will need to rename 

// the req.params only works with the fucntion being called with that request route

module.exports = function bouncer (req, res, next) {
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