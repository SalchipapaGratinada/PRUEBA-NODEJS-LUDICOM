const {matchedData} = require('express-validator');
const {tokenSing} = require('../utils/handleJwt');
const {handleHttpError} = require('../utils/handleError');
const {bd} = require('../config/mysql');



const login = async(req, res) => {
    try {
        req = matchedData(req);
        bd.query('SELECT usu.idUsuario, usu.nombres, usu.apellidos, usu.email, usu.num_documento, es.idEstado, es.nombre '+
        ' FROM Usuarios AS usu INNER JOIN Estado as es ON usu.estado = es.idEstado '+
        ' WHERE usu.email = ?;', [req.email], async (err, data) => {
            if (err) {
              throw err;
            }
            if (data.length > 0) {
                const user = data[0];
                const num_documento = user.num_documento;
                if (num_documento == req.num_documento) {
                    const dat = {
                        token: await tokenSing(user),
                        user
                    }
                    res.send({dat});
                }else{
                    handleHttpError(res, "Num. Documento Incorrecto", 401);
                }
            }else{
                res.json("Email No Existe")
            }
        });
        
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error En El Login");
    }
}

module.exports = {
    login
}