const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateUsuario = [
    check("nombres").exists().notEmpty().isLength({max:50}),
    check("apellidos").exists().notEmpty().isLength({max:50}),
    check("fecha_nacimiento").exists().notEmpty(),
    check("email").exists().notEmpty().isLength({max:50}),
    check("num_documento").exists().notEmpty().isLength({max:7}),
    check("area").exists().notEmpty().isLength({max:2}),
    check("salario").exists().notEmpty().isLength({max:10}),
    check("estado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];

const validatorIdUsuario = [
    check("idUsuario").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];
const validatorUpdateUsuario = [
    check("idUsuario").exists().notEmpty(),
    check("nombres").exists().notEmpty().isLength({max:50}),
    check("apellidos").exists().notEmpty().isLength({max:50}),
    check("fecha_nacimiento").exists().notEmpty(),
    check("email").exists().notEmpty().isLength({max:50}),
    check("num_documento").exists().notEmpty().isLength({max:7}),
    check("area").exists().notEmpty().isLength({max:2}),
    check("salario").exists().notEmpty().custom((value) => {
        if (!(/^\d+(\.\d{1,2})?$/.test(value))) {
          throw new Error('El Salario debe ser un número decimal válido con dos decimales');
        }
        return true;
      }),
    check("estado").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorCreateUsuario,
    validatorIdUsuario,
    validatorUpdateUsuario,
}