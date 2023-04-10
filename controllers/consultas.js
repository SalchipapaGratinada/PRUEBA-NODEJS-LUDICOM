const {bd} = require('../config/mysql');
const {handleHttpError} = require('../utils/handleError');


const getConsultaAreas = async (req, res) =>{
    try {
        bd.query('SELECT usu.codigo, usu.nombre, usu.lider, es.idEstado, es.nombre as NombreEstado'+
        ' FROM Areas AS usu INNER JOIN Estado as es ON usu.estado = es.idEstado', (err, data) => {
            if (err) {
              throw err;
            }
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer Las Consulta De Las Areas");
    }
}
const getConsultaUsuarios = async (req, res) =>{
    try {
        bd.query('SELECT usu.idUsuario, usu.nombres, usu.apellidos, usu.email, usu.num_documento, usu.fecha_nacimiento, usu.salario, ar.codigo, ar.nombre, ar.lider, es.idEstado, es.nombre as NombreEstado'+
        ' FROM Usuarios AS usu INNER JOIN Estado as es ON usu.estado = es.idEstado'+
        ' INNER JOIN Areas as ar ON usu.area = ar.codigo', (err, data) => {
            if (err) {
              throw err;
            }
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer La Consulta De Usuarios");
    }
}


module.exports = {
    getConsultaAreas,
    getConsultaUsuarios,
}