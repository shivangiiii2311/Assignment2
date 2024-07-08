const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const userRoute = require('./routes/user_route');

const productRoute = require('./routes/product_route');
const orderRoute = require('./routes/order_route');
const cartRoute = require('./routes/cart_route');

const commentRoute = require('./routes/comment_route');


// Connect to MongoDB
mongoose.connect('mongodb+srv://shivangiii2311:6BBCMOpUeyrijATP@assignment2.1fm7jii.mongodb.net/?retryWrites=true&w=majority&appName=Assignment2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/order', orderRoute);
app.use('/cart', cartRoute);
app.use('/comment', commentRoute);

// Start the server on port 8080
app.listen(8080, function () {
    console.log(`Server is running on http://localhost:8080`);
});
