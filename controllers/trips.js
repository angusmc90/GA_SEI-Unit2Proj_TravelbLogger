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
        //CREATE AN ATTRIBUTE IN THE BODY TO CAPTURE WHO IS CREATING THIS DOC
        //IN trips MODEL, USER ATTR IS bLogger
        req.body.bLogger = req.user
        console.log(req.body)

        //CREATE DOC IN DATABASE

        //go back to feed
        res.render('trips')

        // we need to add user details so we can see them in the trip and possible link to them
        // then we need to push the trip to the user doc
        // user id does not need to be in the trips object
    } catch(err) {
        console.log(err)
    }
}