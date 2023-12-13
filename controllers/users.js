const UserModel = require("../models/user");

module.exports ={
    show
}

async function show (req, res){
    console.log(req.user)
    try {
        const userDocument = await UserModel.findById(req.params.userID)
        res.render("users/show", {userDoc: userDocument})
    } catch(err) {
        console.log(err)
    }
}