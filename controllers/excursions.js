const TripModel = require("../models/trip");
const ExcursionModel = require("../models/user");

module.exports ={
    new: newExcursion,
    create
}

function newExcursion (req, res){
    // Go to new excursion form page
    res.render('trips/excursions/new')
}

async function create (req, res) {
    // BEEF NOTE: Dec 13 2023
    // Cannot for the life of me get the params of the trip ID to tie the excurion to the trip
    // which is the whole point of this feature
    try{
        // console.log(trip._id)
    } catch(err) {
        console.log(err)
    }
}



        // //CREATE ATTRIBUTES IN BODY TO CAPTURE USER INFO FOR UI
        // const user = req.user
        // req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
        // req.body.userPFPic = user.avatar
        // req.body.userID = user._id
        // // when ready to add photos - 
        // // req.body.coverShot = "https://i.imgur.com/wOm0coa.png"
        
        // // CONVERT "is fave" CHECKBOX TO BOOLEAN
        // req.body.favorite = !!req.body.favorite
        // //CREATE DOC IN DATABASE
        // const excursionDoc = await ExcursionModel.create(req.body);
        // // console.log(tripDoc)

        // // we need to add user details so we can see them in the trip and possible link to them
        // // then we need to push the tripDoc to the user doc
        // // user id does not need to be in the trips object

        // //GO BACK TO FEED
        // res.render('trips')