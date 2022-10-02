const express = require('express');
const Router = express.Router();


Router.post('/member-data',(req,res)=>{
    res.json({
        message:"You have access",
        host:`${req.hostname}${req.baseUrl}`
    })
    console.clear();
    console.log(req.body)
})


module.exports = Router;