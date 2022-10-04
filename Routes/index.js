const express = require('express');
const Router = express.Router();
const axios = require('axios');
const { json } = require('body-parser');
require('dotenv').config();

const api = axios.create({
    baseURL:`${process.env.BASE_URL}`
})


Router.post('/member-data', async (req,res)=>{
    console.clear();
    console.log('\n\n\n\n\n\n\n')
    const PostMember = async ()=>{
        try
        {
            return await api.post(`/api/member-register/${process.env.API_KEY}`,req.body)
        }
        catch(error)
        {
            return error.response;
        }
    }
    const result = await PostMember();
    const json = {
        message : result.data,
        code : result.status
    }
    await res.json(json)
    console.log(json)
})
module.exports = Router;