const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateEstado = [
    check("nombre").exists().notEmpty().isLength({min:5, max:50}),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];

const validatorIdEstado = [
    check("idEstado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];
const validatorUpdateEstado = [
    check("nombre").exists().notEmpty().isLength({min:5, max:50}),
    check("idEstado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];



module.exports = {
    validatorCreateEstado,
    validatorIdEstado,
    validatorUpdateEstado,
}