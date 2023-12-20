// will need to rename 

module.exports = function bouncer (req, res, next) {
    console.log("BOUNCER FUNCTION")
    console.log(req.params)
    next()
  }