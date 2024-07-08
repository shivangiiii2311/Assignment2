const express = require('express');
const CartModel = require('../models/cart_model');
const expressRouter = express.Router();

expressRouter.get('/', async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

expressRouter.post('/', async (req, res) => {
  try {
    const newCart = new CartModel(req.body);
    await newCart.save();
    res.status(200).send(newCart);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = expressRouter;
