const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login-db",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err){
        console.warn("Errorsss");
    }else{
        console.info("Success");
    }
});