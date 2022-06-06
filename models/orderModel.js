const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const product = require('./productModel')


const dict = new Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: product
	},
	quantity: Number
})
const orderSchema = new Schema({
	'user': {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	'sum': Number,
	'date': Date,
	'products': [dict]
});
var autoPopulate = function(next) {
	this.populate('products.product');
	next();
  };
  
  orderSchema.
	pre('findOne', autoPopulate).
	pre('find', autoPopulate);
  
module.exports = mongoose.model('order', orderSchema);
