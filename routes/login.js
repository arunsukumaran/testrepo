const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const crypto = require('crypto');

router.post('/',(req,res) => {
    Users.findOne({name:req.body.name, password:crypto.createHmac('sha256',req.body.password).update("skywalker").digest('hex')},(err,data) => {
        if(!data) {
            res.status(500).send("Invalid")
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;