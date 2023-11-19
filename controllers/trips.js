//Will need to require models here when ready to pull created trips

module.exports ={
    index,
    new: newTrip,
}

function index (req,res) {
    try{
        console.log('going to trip feed')
        res.render('trips')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

function newTrip(req,res){
    res.render('trips/new')
}