const {bd} = require('../config/mysql');
const {handleHttpError} = require('../utils/handleError');


const getAreas = async (req, res) =>{
    try {
        bd.query('SELECT * FROM Areas', (err, data) => {
            if (err) {
              throw err;
            }
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer Las Areas");
    }
}

const getArea = async (req, res) =>{
    try {
        const idArea = req.params.idArea;
        bd.query('SELECT * FROM Areas WHERE idArea = ?;', [idArea], (err, data) => {
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
        handleHttpError(res, "Error al traer El Area");
    }
}

const createArea = async(req, res) =>{
    try {
        const {codigo, nombre, lider, estado} = req.body;
        bd.query('INSERT INTO Areas(codigo, nombre, lider, estado) VALUES (?, ?, ?, ?);', [codigo, nombre, lider, estado], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Area Creada Correctamente",
                body:{codigo, nombre, lider, estado}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al Crear el Area");
    }
}

const UpdateArea = async(req, res) =>{
    try {
        const idArea = req.params.idArea;
        const {codigo, nombre, lider, estado} = req.body;
        bd.query('UPDATE Areas SET codigo = ?, nombre = ?, lider = ?, estado = ? WHERE idArea = ?;', [codigo, nombre, lider, estado, idArea], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Area Actualizada Correctamente",
                body:{codigo, nombre, lider, estado}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al actualizando el Area");
    }
}

const deleteArea = async (req, res) =>{
    try {
        const idArea = req.params.idArea;
        bd.query('DELETE FROM Areas WHERE idArea = ?;', [idArea], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Area Eliminada Correctamente",
                body:{idArea}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al eliminar El Area");
    }
}

module.exports = {
    getAreas,
    getArea,
    createArea,
    UpdateArea,
    deleteArea
}