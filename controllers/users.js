const UserModel = require("../models/user");

module.exports ={
    show,
    edit,
    update,
}

async function show (req, res){
    console.log(req.user)
    try {
        // find the user document
        const userDocument = await UserModel.findById(req.params.userID)
        // populate the trips param so they can render on user page
        .populate('trips')
        // render the user profile page
        res.render("users/show", {userDoc: userDocument})
    } catch(err) {
        console.log(err)
    }
}

async function edit (req, res) {
    try {
        const userID = req.params.userID
        // find the user document
        const userDocument = await UserModel.findById(userID)
        // render the edit page
        res.render("users/edit", { userDoc: userDocument })
    } catch(err) {
        console.log(err)
    }
}

async function update (req, res) {
    try {
        // grab the user id
        const userID = req.params.userID
        // find by id and update
        await UserModel.findByIdAndUpdate(userID, req.body)
        res.redirect(`/users/${userID}`)
    } catch(err) {
        console.log(err)
    }
}