const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = 8000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log('working');
})