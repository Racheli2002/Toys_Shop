const mongoose = require('mongoose')
//let orderSchema=require('../models/orderModel.js')

const addressSchema = new mongoose.Schema({
    city: String,
    street: String

})

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, max: 6 },
    address: [addressSchema]
}

)
userSchema.virtual('orders', {
    ref: 'order',
    localField: '_id',
    foreignField: 'user'
})
userSchema.set('toJSON',{virtuals:true})
module.exports = mongoose.model('user', userSchema)