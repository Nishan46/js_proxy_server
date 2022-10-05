const express = require('express');
const Router = express.Router();
const api = require('axios');
const { json } = require('body-parser');
require('dotenv').config();

api.defaults.baseURL = `${process.env.BASE_URL}`;
api.defaults.timeout = 10000;


Router.post('/member-data', async (req,res)=>{
    console.clear();
    const PostMember = async ()=>{
        try
        {
            return await api.post(`/api/member-register/${process.env.API_KEY}`,req.body).catch((error)=>{
                return {data:error.message , status:error.code};
            })
        }
        catch(error)
        {
            return error.response;
        }
    }
    const result = await PostMember();
    if(result.data != undefined)
    {
        const json = {
            message : result.data,
            code : result.status
        }
        await res.json(json)
        console.log(json)
    }
})
module.exports = Router;