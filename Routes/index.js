const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.json({message:'wada wada bn ithin'})
}),
Router.post('/post',(req,res)=>{
    res.json(req.body)
})


module.exports = Router;