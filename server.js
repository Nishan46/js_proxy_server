const express = require('express');
const cors = require('cors');
const PORT =  5000;
require('dotenv').config();


const app = express();


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.text());
app.use('/api', require('./Routes'));

app.listen(PORT, () =>console.log(`server is listening on PORT:${PORT}`));

