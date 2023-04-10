const express = require('express');
const router = express.Router();
const {getAreas, getArea, createArea, UpdateArea, deleteArea} = require('../controllers/area');
const {validatorIdArea, validatorCreateArea, validatorUpdateArea} = require('../validators/area')
const  loginMiddleware = require('../middleware/session'); 


router.get('/', loginMiddleware, getAreas);

router.get('/:idArea', loginMiddleware, validatorIdArea, getArea);

router.post('/', loginMiddleware, validatorCreateArea, createArea);

router.put('/:idArea', loginMiddleware, validatorUpdateArea, UpdateArea);

router.delete('/:idArea', loginMiddleware,  validatorIdArea, deleteArea);


module.exports = router;