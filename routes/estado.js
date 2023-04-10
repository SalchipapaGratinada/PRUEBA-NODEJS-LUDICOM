const express = require('express');
const router = express.Router();
const {getEstados, getEstado, createEstado, UpdateEstado, deleteEstado} = require('../controllers/estado');
const {validatorCreateEstado, validatorIdEstado, validatorUpdateEstado} = require('../validators/estado')
const  loginMiddleware = require('../middleware/session'); 


router.get('/', loginMiddleware, getEstados);

router.get('/:idEstado', loginMiddleware, validatorIdEstado, getEstado);

router.post('/', loginMiddleware, validatorCreateEstado, createEstado);

router.put('/:idEstado', loginMiddleware, validatorUpdateEstado, UpdateEstado);

router.delete('/:idEstado', loginMiddleware, validatorIdEstado, deleteEstado);

module.exports = router;