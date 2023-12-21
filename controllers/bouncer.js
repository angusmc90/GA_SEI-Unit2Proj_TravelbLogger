// will need to rename 

module.exports = function bouncer (req, res, next) {
    console.log("- BOUNCER FUNCTION -")
    console.log("Route:")
    console.log(req.originalUrl)
    console.log("Params:")
    console.log(req.params.tripID)
    res.locals.tripID = req.params.tripID
    console.log("local variable")
    console.log(res.locals.tripID)
    next()
  }