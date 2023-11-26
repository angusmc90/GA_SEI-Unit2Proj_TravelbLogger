const UserModel = require("../models/user");

module.exports ={
    show
}

async function show (req, res){
    console.log(req.user)
    try {
        const userDoc = await UserModel.findById(req.params.id)
        res.render("users/show")
    } catch(err) {
        console.log(err)
    }
}