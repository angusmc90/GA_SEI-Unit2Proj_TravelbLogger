const TripModel = require("../models/trip");
//Will need to require models here when ready to pull created trips

module.exports ={
    index,
    new: newTrip,
    create
}

function index (req,res) {
    try{
        res.render('trips')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

function newTrip(req,res){
    res.render('trips/new')
}

async function create (req, res) {
    try{
        //CREATE ATTRIBUTES IN BODY TO CAPTURE USER INFO FOR UI
        const user = req.user
        req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
        req.body.userPFPic = user.avatar
        req.body.userID = user._id
        //CREATE DOC IN DATABASE
        const tripDoc = await TripModel.create(req.body);
        console.log(tripDoc)

        // we need to add user details so we can see them in the trip and possible link to them
        // then we need to push the tripDoc to the user doc
        // user id does not need to be in the trips object

        //GO BACK TO FEED
        res.render('trips')
    } catch(err) {
        console.log(err)
    }
}