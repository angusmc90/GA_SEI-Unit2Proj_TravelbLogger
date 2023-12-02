// const UserModel = require("../models/user");

module.exports ={
    new: newExcursion
}

function newExcursion (req, res){
    const tripID = req.params.id
    res.render('trips/excursions/new', { tripID })
}