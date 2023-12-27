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
    //-BEEF NOTE: Dec 13 2023
    // Cannot for the life of me get the params of the trip ID to tie the excurion to the trip
    // which is the whole point of this feature
    //-BEEF NOTE Dec 20 2023
    // https://github.com/expressjs/express/issues/3177
    // note to self for pick up to look at the create fn in teh trips controller
    // how was i able to assign req.user to a variable if the local vairables are alow available at the time of rendering?

    req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
    req.body.userPFPic = user.avatar
    req.body.userID = user._id
    // when ready to add photos - 
    // req.body.coverShot = "https://i.imgur.com/wOm0coa.png"
    // CONVERT "is fave" CHECKBOX TO BOOLEAN
    req.body.recommends = !!req.body.recommends
    //CREATE DOC IN DATABASE
    const excursionDoc = await ExcursionModel.create(req.body);
    console.log(excursionDoc._id)
    res.render('trips')

    // try{

    //     req.body.user = user.name //COME BACK AND CHANGE THIS TO PROFILE NAME LATER
    //     req.body.userPFPic = user.avatar
    //     req.body.userID = user._id
    //     // when ready to add photos - 
    //     // req.body.coverShot = "https://i.imgur.com/wOm0coa.png"
    //     // CONVERT "is fave" CHECKBOX TO BOOLEAN
    //     req.body.recommends = !!req.body.recommends
    //     //CREATE DOC IN DATABASE
    //     const excursionDoc = await ExcursionModel.create(req.body);
    //     console.log(excursionDoc._id)
    //     res.render('trips')
    // } catch(err) {
    //     console.log(err)
    // }
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