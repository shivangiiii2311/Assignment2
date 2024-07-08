const express = require('express');
const UserModel = require('../models/user_model');
const expressRouter = express.Router();


expressRouter.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

expressRouter.post('/', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = expressRouter;
