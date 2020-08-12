const express = require("express");
const app = express();
const cors = require("cors");
require("./database/db");

app.use(cors());
app.use(express.json());


app.use('/user', require('./routes/userController'));
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/admin', require('./routes/adminController'));
app.use('/create_user', require('./routes/create-user'));
// console.log("HAI");


module.exports = app;