const express = require('express');
const OrderModel = require('../models/order_model');
const expressRouter = express.Router();

expressRouter.get('/', async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

expressRouter.post('/', async (req, res) => {
  try {
    const newOrder = new OrderModel(req.body);
    await newOrder.save();
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = expressRouter;
