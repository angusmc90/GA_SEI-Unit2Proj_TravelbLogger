const userModel = require("../models/user");
const TripModel = require("../models/trip");
const ExcursionModel = require("../models/excursion");

module.exports ={
    new: newExcursion,
    create,
    show,
}

function newExcursion (req, res){
    // Go to new excursion form page
    res.render('trips/excursions/new')
}

async function create (req, res) {
    try{
        // get user object from req (included in passport)
        const user = req.user;
        // assign user info to req obody
        req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
        req.body.userPFPic = user.avatar
        req.body.userID = user._id
        // to be updated when when ready to add photos - 
        req.body.coverPic = "https://i.imgur.com/wOm0coa.png"
        // converting "reccomends" checkbos to boolean
        req.body.recommends = !!req.body.recommends
        // create excursion doc in DB
        const excursionDoc = await ExcursionModel.create(req.body);
        // find the trip the excursion belongs to
        const parentTrip = await TripModel.findById(req.body.tripID)
        // add the excursion to array
        parentTrip.excursions.push(excursionDoc._id)
        // save to parentTrip
        await parentTrip.save()
        // render the trip page
        res.redirect(`/trips/${req.body.tripID}`)
    } catch(err) {
        console.log(err)
    }
}

async function show (req, res) {
    try {
        const excursionDocument = await ExcursionModel.findById(req.params.excursionID)
        res.render("trips//excursions/show", { excursionDoc: excursionDocument })
    } catch(err) {
        console.log(err)
    }   
}