const express = require('express');
const router = express.Router();
const Users = require('../models/user');

router.post('/',(req,res) => {
    Users.find({},(err,data) => {
        if(!data) {
            res.status(500).send("Invalid")
        } else {
            // console.log(data);
            res.status(200).send(data)
        }
    });
});

module.exports = router;
