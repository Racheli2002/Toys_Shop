const OrderModel = require('../models/orderModel.js');
//const UserSchema=require('../models/userSchema')
const { default: mongoose } = require('mongoose');
/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */


module.exports.getOrderByUserId = async function (req, res) {
    try {
        const id = req.params.id;
        //const user=UserSchema.find({_id:id})//.populate("orders")//.populate('products.product')
        const order = await OrderModel.find({ user: id }).populate('products.product')
        // order.products[0].product
        res.send(order);
    }
    catch (error) {
        next(error)
    }
}

module.exports.postOrder = async function (req, res) {
    try {
        const d = new Date();

        const order = new OrderModel({
            user: mongoose.Types.ObjectId(req.body.user),
            sum: req.body.sum,
            date: d,
            products: req.body.products
        });
        const order1 = await OrderModel.create(order)
        console.log(order1 instanceof OrderModel)
        res.send(order1);
    }
    catch (error) {
        next(error)
    }
}


