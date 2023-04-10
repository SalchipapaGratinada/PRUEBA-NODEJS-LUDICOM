const express = require('express');
const router = express.Router();
const {getReporte} = require('../controllers/reporte');
const  loginMiddleware = require('../middleware/session'); 

router.get('/', loginMiddleware, getReporte);



module.exports = router;