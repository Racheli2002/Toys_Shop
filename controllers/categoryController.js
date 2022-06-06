const CategoryModel = require('../models/categoryModel.js');


module.exports.getAllCategories = async function (req, res) {
   try {
      const categories = await CategoryModel.find();
      res.send(categories);
   }
   catch (error) {
      next(error)
   }

}