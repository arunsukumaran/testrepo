const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const crypto = require('crypto');


router.post('/',(req,res) => {
    const pass = crypto.createHmac('sha256',req.body.password).update("skywalker").digest('hex');
    Users.create({
        name: req.body.name,
        password: pass,
        email: req.body.email,
        phno: req.body.phno,
        // console.log("hai");
    }, (err,data) => {
        console.log(data);
    });
    res.send("Signup success");
});

module.exports = router;