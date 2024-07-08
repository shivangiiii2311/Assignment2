const express = require('express');
const CommentModel = require('../models/comment_model');
const expressRouter = express.Router();

expressRouter.get('/', async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

expressRouter.post('/', async (req, res) => {
  try {
    const newComment = new CommentModel(req.body);
    await newComment.save();
    res.status(200).send(newComment);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


module.exports = expressRouter;
