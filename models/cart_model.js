const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    { 
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product' 
      }, 
      quantity: Number
    }
  ],
});

const CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;