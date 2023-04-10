const express = require('express');
const router = express.Router();
const {getUsuarios, getUsuario, createUsuario, UpdateUsuario, deleteUsuario} = require('../controllers/usuario');
const {validatorIdUsuario, validatorCreateUsuario, validatorUpdateUsuario} = require('../validators/usuario')
const  loginMiddleware = require('../middleware/session'); 


router.get('/', loginMiddleware, getUsuarios);

router.get('/:idUsuario', loginMiddleware, validatorIdUsuario, getUsuario);

router.post('/', validatorCreateUsuario, createUsuario);

router.put('/:idUsuario', loginMiddleware, validatorUpdateUsuario, UpdateUsuario);

router.delete('/:idUsuario', loginMiddleware,  validatorIdUsuario, deleteUsuario);


module.exports = router;