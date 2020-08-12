const express = require('express');
const router = express.Router();
const Users = require('../models/user');



router.get('/',(req,res) => {
    Users.find({},(err,data) => {
        if(!data) {
            res.status(500).send("Invalid")
        } else {
            res.status(200).send(data)
        }
    })
});

module.exports = router;