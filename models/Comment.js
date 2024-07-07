const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  images: [String],
  text: String
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;