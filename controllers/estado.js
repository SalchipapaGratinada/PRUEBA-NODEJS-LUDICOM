const {bd} = require('../config/mysql');
const {handleHttpError} = require('../utils/handleError');


const getEstados = async (req, res) =>{
    try {
        bd.query('SELECT * FROM Estado', (err, data) => {
            if (err) {
              throw err;
            }
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer Los Estados");
    }
}

const getEstado = async (req, res) =>{
    try {
        const idEstado = req.params.idEstado;
        bd.query('SELECT * FROM Estado WHERE idEstado = ?;', [idEstado], (err, data) => {
            if (err) {
              throw err;
            }
            if (data.length <= 0) {
                res.send(`No Hay Informacion`);
            }else{
                res.json(data);
            }
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer El Estado");
    }
}

const createEstado = async(req, res) =>{
    try {
        const {nombre} = req.body;
        bd.query('INSERT INTO Estado(nombre) VALUES (?);', [nombre], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Estado Creado Correctamente",
                body:{nombre}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al creando el Estado");
    }
}

const UpdateEstado = async(req, res) =>{
    try {
        const idEstado = req.params.idEstado;
        const {nombre} = req.body;
        bd.query('UPDATE Estado SET nombre = ? WHERE idEstado = ?;', [nombre, idEstado], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Estado Actualizado Correctamente",
                body:{nombre}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al actualizando el Estado");
    }
}

const deleteEstado = async (req, res) =>{
    try {
        const idEstado = req.params.idEstado;
        bd.query('DELETE FROM Estado WHERE idEstado = ?;', [idEstado], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Estado Eliminado Correctamente",
                body:{idEstado}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al eliminar El Estado");
    }
}

module.exports = {
    getEstados,
    getEstado,
    createEstado,
    UpdateEstado,
    deleteEstado
}