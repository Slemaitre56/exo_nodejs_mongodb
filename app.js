const express = require("express");
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts')
require('dotenv').config();




app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send("home")
});



mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected')
);

app.listen(3000);

//npm i express nodemon mongoose dotenv