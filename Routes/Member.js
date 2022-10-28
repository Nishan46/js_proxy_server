const express = require('express');
const Router = express.Router();
const api = require('axios');
const { json } = require('body-parser');
require('dotenv').config();

api.defaults.baseURL = `${process.env.BASE_URL}`;
api.defaults.timeout = 10000;


Router.post('/member-data', async (req,res)=>{
    console.log(req.body)
    res.json(req.body)
}).get('/ado',(req,res)=>{
    console.log(req.body)
    res.json({name:'nishan'}).statusCode = 200;
})
module.exports = Router;