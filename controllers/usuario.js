const {bd} = require('../config/mysql');
const {handleHttpError} = require('../utils/handleError');


const getUsuarios = async (req, res) =>{
    try {
        bd.query('SELECT * FROM Usuarios', (err, data) => {
            if (err) {
              throw err;
            }
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al traer Los Usuarios");
    }
}

const getUsuario = async (req, res) =>{
    try {
        const idEstado = req.params.idUsuario;
        bd.query('SELECT * FROM Usuarios WHERE idUsuario = ?;', [idEstado], (err, data) => {
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

const createUsuario = async(req, res) =>{
    try {
        const {nombres, apellidos, fecha_nacimiento, email, num_documento, area, salario, estado} = req.body;
        bd.query('INSERT INTO Usuarios(nombres, apellidos, fecha_nacimiento, email, num_documento, area, salario, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [nombres, apellidos, fecha_nacimiento, email, num_documento, area, salario, estado], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Usuario Creado Correctamente",
                body:{nombres, 
                    apellidos, 
                    fecha_nacimiento, 
                    email, num_documento, 
                    area, 
                    salario, 
                    estado}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al creando el Usuario");
    }
}

const UpdateUsuario = async(req, res) =>{
    try {
        const idUsuario = req.params.idUsuario;
        const {nombres, apellidos, fecha_nacimiento, email, num_documento, area, salario, estado} = req.body;
        bd.query('UPDATE Usuarios SET nombres = ?, apellidos = ?, fecha_nacimiento = ?, email = ?, num_documento = ?, area = ?, salario = ?, estado = ? WHERE idUsuario = ?;', [nombres, apellidos, fecha_nacimiento, email, num_documento, area, salario, estado, idUsuario], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Usuario Actualizado Correctamente",
                body:{nombres, 
                    apellidos, 
                    fecha_nacimiento, 
                    email, num_documento, 
                    area, 
                    salario, 
                    estado}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al actualizando el Usuario");
    }
}

const deleteUsuario = async (req, res) =>{
    try {
        const idUsuario = req.params.idUsuario;
        bd.query('DELETE FROM Usuarios WHERE idUsuario = ?;', [idUsuario], (err, data) => {
            if (err) {
              throw err;
            }
            res.json({
                message:"Usuario Eliminado Correctamente",
                body:{idUsuario}
            })
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al eliminar El Estado");
    }
}

module.exports = {
    getUsuarios,
    getUsuario,
    createUsuario,
    UpdateUsuario,
    deleteUsuario
}