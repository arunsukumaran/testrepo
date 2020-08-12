const mongoose = require('mongoose');

const users = mongoose.Schema({
    name:String,
    password:String,
    phno:Number,
    email:String,
    role:{
        type: String,
        default:"user"
    }
    
});
// console.log(users.name);


const userModel = mongoose.model('User',users);

module.exports = userModel;