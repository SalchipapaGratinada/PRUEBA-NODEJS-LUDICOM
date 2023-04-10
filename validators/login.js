const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorLogin = [
    check("email").exists().notEmpty(),
    check("num_documento").exists().notEmpty(),
    (req, res, next)=>{
        return validateResults(req, res, next);
    }
]


module.exports = {validatorLogin}