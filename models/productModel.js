const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const category=require('./categoryModel')
const productSchema = new Schema({
	'name' : String,
	'desc' : String,
	'price' : Number,
	'img':String,
	'category' : {
	 	type: Schema.Types.ObjectId,
	 	ref: category
	}
});
var autoPopulate = function(next) {
	this.populate('category');
	next();
  };
  
  productSchema.   
	pre('findOne', autoPopulate).
	pre('find', autoPopulate);

module.exports = mongoose.model('product', productSchema);
