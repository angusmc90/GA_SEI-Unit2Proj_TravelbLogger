const UserModel = require("../models/user");
const TripModel = require("../models/trip");

module.exports ={
    index,
    new: newTrip,
    create,
    show
}

async function index (req,res) {
    try{
        // BEEF NOTE:
        // find all trip documents
        const tripDocuments = await TripModel.find({}).exec()
        // BEEF NOTE: 
        // seems .exec isnt needed? 
        // render the trips index page with all of the trip documents found
        res.render('trips', {tripDocs: tripDocuments})
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
        // create attributes in body to capture user info to include in trip document
        const user = req.user
        req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
        req.body.userPFPic = user.avatar
        req.body.userID = user._id
        // when ready to add photos - req.body.coverShot = "https://i.imgur.com/wOm0coa.png"
        // convert "is fave" checkbox to boolean
        req.body.favorite = !!req.body.favorite
        // create doc in database
        const tripDoc = await TripModel.create(req.body);
        // find user document in database
        const userDoc = await UserModel.findById(user._id)
        // add tripDoc id to userDoc
        userDoc.trips.push(tripDoc._id)
        // save doc
        await userDoc.save()
        // go to trip page
        res.redirect(`/trips/${tripDoc._id}`)
    } catch(err) {
        console.log(err)
    }
}

async function show (req, res){
    // console.log("TRIPS SHOW LOCALS CALL")
    // console.log(res.locals)
    try {
        const tripDocument = await TripModel.findById(req.params.tripID)
            .populate('excursions')
        // this method uses the /trips/:tripID path so thats is why tripID is accessible here
        res.render("trips/show", {tripDoc: tripDocument})
    } catch(err) {
        console.log(err)
    }
}