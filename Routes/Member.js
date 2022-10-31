const express = require('express');
const Router = express.Router();
const api = require('axios');
const { json } = require('body-parser');
require('dotenv').config();

api.defaults.baseURL = `${process.env.BASE_URL}`;
api.defaults.timeout = 20000;

Router.post('/member-data', async (req,res)=>{
    req.body['user_name'] = `${req.body['admission_id']}@mrc.media`;
    await api.post(`api/member-register/${process.env.API_KEY}` , req.body)
    .then(function (data){
        console.clear()
        console.log(`Request Accepted with code - ${data.status}` )
        res.status(202).json(data.data)

    }).catch(function (error){
        if (error instanceof api.AxiosError)
        {
            if(error.response === undefined)
            {
                console.clear()
                console.log('Server Down !')
                res.status(503).send('Server Down !')
            }
            else
            {
                console.clear()
                console.log(`Request Field With code - ${error.response.status}`)
                res.status(error.response.status).send(error.response.data)
            }
        }
    })
}).post('/category-data/:token', async (req,res) =>{
    await api.post(`api/category-comming/${process.env.API_KEY}/${req.params.token}`, req.body)
    .then(function(data){
        console.clear()
        console.log(`Request Accepted with code - ${data.status}` )
        res.status(202).json(data.data)
    })
    .catch(function (error){
        if(error.response === undefined)
            {
                console.clear()
                console.log('Server Down !')
                res.status(503).send('Server Down !')
            }
            else
            {
                console.clear()
                console.log(`Request Field With code - ${error.response.status}`)
                res.status(error.response.status).send(error.response.data)
            }
    })
}).post('/mobile-data/:token', async (req,res) =>{
    await api.post(`api/mobile-comming/${process.env.API_KEY}/${req.params.token}`, req.body)
    .then(function(data){
        console.clear()
        console.log(`Request Accepted with code - ${data.status}` )
        res.status(202).json(data.data)
    })
    .catch(function (error){
        if(error.response === undefined)
            {
                console.clear()
                console.log('Server Down !')
                res.status(503).send('Server Down !')
            }
            else
            {
                console.clear()
                console.log(`Request Field With code - ${error.response.status}`)
                res.status(error.response.status).send(error.response.data)
            }
    })
})

module.exports = Router;