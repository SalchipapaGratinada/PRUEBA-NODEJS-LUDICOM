const {verifyToken} = require('../utils/handleJwt');
const {handleHttpError} = require('../utils/handleError');
const {bd} = require('../config/mysql');

const loginMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT JWT", 401);
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token);
        if (!dataToken._id) {
            handleHttpError(res, "ERROR ID TOKEN", 401);
            return
        }
        bd.query('SELECT usu.idUsuario, usu.nombres, usu.apellidos, usu.email, usu.num_documento, es.idEstado, es.nombre '+
        ' FROM Usuarios AS usu INNER JOIN Estado as es ON usu.estado = es.idEstado '+
        ' WHERE usu.idUsuario = ?;', [dataToken._id], (err, data) => {
            if (err) {
              throw err;
            }
            req.user = data;
            next();
        });
        
    } catch (err) {
        console.log(err);
        handleHttpError(res, "NOT SESSION - JWT EXPIRED", 401);
    }
}

module.exports = loginMiddleware