const {bd} = require('../config/mysql');
const {handleHttpError} = require('../utils/handleError');
const xlsx = require('xlsx');

const getReporte = async (req, res) =>{
    try {
        bd.query('SELECT usu.idUsuario, usu.nombres, usu.apellidos, usu.email, usu.num_documento, usu.fecha_nacimiento, usu.salario, ar.codigo, ar.nombre, ar.lider, es.idEstado, es.nombre as NombreEstado'+
        ' FROM Usuarios AS usu INNER JOIN Estado as es ON usu.estado = es.idEstado'+
        ' INNER JOIN Areas as ar ON usu.area = ar.codigo', (err, data) => {
            if (err) {
              throw err;
            }
            exportExcel(data);
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "Error al crear el reporte de USuarios");
    }
}


const exportExcel = (data) =>{
    const workSheet = xlsx.utils.json_to_sheet(data);
    const workBook = xlsx.utils.book_new(); 
    xlsx.utils.book_append_sheet(workBook, workSheet, "USuarios");
    xlsx.write(workBook, {bookType:'xlsx', type:'buffer'});
    xlsx.write(workBook, {bookType:'xlsx', type:'binary'});
    xlsx.writeFile(workBook, "USuariosData.xlsx");
}


module.exports = {
    getReporte,
}