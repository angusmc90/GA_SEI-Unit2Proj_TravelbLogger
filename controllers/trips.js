const UserModel = require("../models/user");
const TripModel = require("../models/trip");

module.exports ={
    index,
    new: newTrip,
    create,
    show,
    edit
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
        // convert tripStart/End to yyyy-MM-dd format
        req.body.tripStart = req.body.tripStart.toISOString().slice(0, 10);
        req.body.tripEnd = req.body.tripEnd.toISOString().slice(0, 10);
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

async function edit (req, res) {
    try {
        // find the tripDoc you want to edit
        const tripDocument = await TripModel.findById(req.params.tripID)
        // render the edit page form & pass along tripDoc for pre-populating the form
        res.render("trips/edit", {tripDoc: tripDocument})
    } catch(err) {
        console.log(err)
    }
}
// NOTES FOR FUTURE EDITS - we are not just using the new page and prepopulating
// because the vision for the edit page is to have it look like the show page
// with the ability to 'hide' comments and remove excursions from a trip all
// in one view


async function update (req, res) {
    try {
// // TESTING EXECUTION WORKS WITH BELOW CONSOLE
// // note to self - use edit function to convert trip start and end for test docs, then remove those lines when done & cleaning up notes
// console.log('put /:id redirect to /show')
        // break down req.body into:
        // a var for trip._id
        const tripID = req.body.thisTrip
        // a new object from an array of KVPs
        const trueReqObj = Object.fromEntries(
            // break req.body into an array of KVPs
            Object.entries(req.body)
            // remove .thisTrip from req.body
            .filter(([key]) => key !== 'thisTrip')
        )
        // findByIdAndUpdate the trip doc via the id and save
        const updatedTrip = await UserModel.findByIdAndUpdate(tripID, trueReqObj)
        .save()
        // redirect through show route with trueReqObj
        res.redirect('./show', { tripDoc : updatedTrip })
    } catch(err) {
        console.log(err)
    }
}

// for edit function, the link to the edit page will direct to a get
// but the form method will be POST with a query string that labels it as a put
// ?_method=
// same query string to be used for delete