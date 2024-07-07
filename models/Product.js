const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;