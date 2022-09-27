const express = require('express');
const Router = express.Router();



Router.get('/' ,(req,res)=>{
    res.json({message:'wada wada bn ithin'})
}),
Router.post('/post',(req,res)=>{
    if(req.headers.host === "localhost:5000"){
        res.json({
            message:"You have access",
            body:`${req.headers.accept}`
        })
    }
    else{
        res.status(700).json({message:'UnAuthorized request'}).statusMessage.replace('hellow');
        //Hellow there
    }
})


module.exports = Router;