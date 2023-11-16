//Will need to require models here when ready to pull created trips

module.exports ={
    index,
}

function index (req,res) {
    try{
        console.log('going to trip feed')
        res.render('./trips/index')
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}