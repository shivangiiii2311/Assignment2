const express = require('express');
const ProductModel = require('../models/product_model');
const expressRouter = express.Router();

expressRouter.get('/', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

expressRouter.post('/', async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = expressRouter;
