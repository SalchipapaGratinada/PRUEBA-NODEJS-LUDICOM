const express = require('express');
const router = express.Router();
const {login} = require('../controllers/login');
const {validatorLogin} = require('../validators/login')


router.post('/', validatorLogin, login);


module.exports = router