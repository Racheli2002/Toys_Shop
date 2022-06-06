const User = require('../models/userSchema')
const { ObjectId } = require('mongodb')
const db = require('../db/db')


module.exports.getAllUsers = async function (req, res,next) {
    try {
    const users = await User.find();
    res.send(users);
}
catch (error) {
    next(error)
    console.log("gggggg")
}
}

module.exports.getUserByPasswordMail = async function (req, res, next) {
    try {

        const password1 = req.params.password;
        const email1 = req.params.email;
        const user = await User.findOne({ password: password1 })

        res.send(user);
    }
    catch (error) {
        next(error)
    }
}

module.exports.postUser = async function (req, res,next) {
try{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    }
    const doc = await User.create(newUser)


    console.log(doc instanceof User)
    res.send(doc);
}
catch (error) {
    next(error)
}
}




module.exports.putUser = async function (req, res,next) {
    debugger
    try{
    var idToUpdate = req.params.id;
    const { name, email, password, address } = req.body;
    let user =
    {
        name: name,
        email: email,
        password: password,
        address: address
    }
    user=await User.updateOne({ _id: idToUpdate }, user)

    res.send(user)
}
catch (error) {
    next(error)
}
}
module.exports.deleteUser = async function (req, res,next) {
    try{
    const idToDelete = req.params.id;
    await User.deleteOne({ _id: idToDelete })
    res.send("delete")
}
catch (error) {
    next(error)
}
}

module.exports.getOrders= async function(req,res,next){
    const id=req.params.id;
try
{
    const orders= await  User.findOne({_id:id}).populate({path:'orders',select:'date sum products'})
    res.send(orders)
 
    
}
catch(err)
   {
   next(err)
}}

