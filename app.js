const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', require('./routes'));

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`SERVER READY AND LISTEN PORT ${port}`)
});


