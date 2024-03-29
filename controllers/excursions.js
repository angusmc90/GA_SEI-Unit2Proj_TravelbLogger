const userModel = require("../models/user");
const TripModel = require("../models/trip");
const ExcursionModel = require("../models/excursion");

module.exports ={
    new: newExcursion,
    create,
    show,
    edit,
    update
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
        res.render("trips/excursions/show", { excursionDoc: excursionDocument })
    } catch(err) {
        console.log(err)
    }   
}

async function edit (req, res) {
    try {
        // find the tripDoc you want to edit
        const excursionDocument = await ExcursionModel.findById(req.params.excursionID)
        // render the edit page form & pass along tripDoc for pre-populating the form
        res.render("trips/excursions/edit", {excursionDoc: excursionDocument})
    } catch(err) {
        console.log(err)
    }
}

async function update (req, res) {
    try {
        // break down req.body into
        // - a var for trip._id
        const excursionID = req.body.thisExcursion
        const tripID = req.body.relTrip
        // - a new object from an array of KVPs
        const trueReqObj = Object.fromEntries(
        // break req.body into an array of KVPs
        Object.entries(req.body)
            // remove .thisTrip from req.body
            .filter(([key]) => key !== 'thisExcur')
            )
        // turn excursion date string into date objects
        trueReqObj.date = new Date(req.body.date)
        trueReqObj.recommends = !!req.body.recommends
        // findByIdAndUpdate the trip doc via the id and save
        // .save isn't working? look up later why that isnt but new:true will?
        await ExcursionModel.findByIdAndUpdate(excursionID, trueReqObj, { new: true})
        // redirect through show route
        // note to self that the object cannot be passed with redirect however
        // bcause the redirect trips URL does not need to be passed with
        res.redirect(`/trips/${tripID}/excursions/${excursionID}`)
    } catch(err) {
        console.log(err)
    }
}