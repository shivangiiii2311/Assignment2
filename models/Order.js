const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
  totalCost: Number,
  date: { type: Date, default: Date.now }
});

const Order =  mongoose.model('Order', OrderSchema);
module.exports = Order;