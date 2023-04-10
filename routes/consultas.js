const express = require('express');
const router = express.Router();
const {getConsultaAreas, getConsultaUsuarios} = require('../controllers/consultas');
const  loginMiddleware = require('../middleware/session'); 

router.get('/areas', loginMiddleware, getConsultaAreas);
router.get('/usuarios', loginMiddleware, getConsultaUsuarios);


module.exports = router;
