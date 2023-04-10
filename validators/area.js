const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateArea = [
    check("codigo").exists().notEmpty().isLength({max:2}),
    check("nombre").exists().notEmpty().isLength({max:50}),
    check("lider").exists().notEmpty().isLength({max:7}),
    check("estado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];

const validatorIdArea = [
    check("idArea").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];
const validatorUpdateArea = [
    check("idArea").exists().notEmpty(),
    check("codigo").exists().notEmpty().isLength({max:2}),
    check("nombre").exists().notEmpty().isLength({max:50}),
    check("lider").exists().notEmpty().isLength({max:7}),
    check("estado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorCreateArea,
    validatorIdArea,
    validatorUpdateArea,
}