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
        // BEEF NOTE:
        // CREATE ATTRIBUTES IN BODY TO CAPTURE USER INFO FOR UI
        const user = req.user
        req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
        req.body.userPFPic = user.avatar
        req.body.userID = user._id
        // when ready to add photos - 
        // req.body.coverShot = "https://i.imgur.com/wOm0coa.png"
        // CONVERT "is fave" CHECKBOX TO BOOLEAN
        req.body.favorite = !!req.body.favorite
        //CREATE DOC IN DATABASE
        const tripDoc = await TripModel.create(req.body);
        // console.log(tripDoc)

        // we need to add user details so we can see them in the trip and possible link to them
        // then we need to push the tripDoc to the user doc
        // user id does not need to be in the trips object

        //GO BACK TO FEED
        res.render('trips')
    } catch(err) {
        console.log(err)
    }
}

async function show (req, res){
    try {
        const tripDocument = await TripModel.findById(req.params.tripID)
        // this method uses the /trips/:tripID path so thats is why tripID is accessible here
        res.render("trips/show", {tripDoc: tripDocument})
    } catch(err) {
        console.log(err)
    }
}