const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number
});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;