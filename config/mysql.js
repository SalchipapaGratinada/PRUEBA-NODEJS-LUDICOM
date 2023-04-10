/* const { mysql } = require('mysql');

const bd =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'base100'
});
 */
const mysql = require('mysql');

const bd = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'base100'
});

bd.connect((err) => {
  if (err) {
    console.error('Error conectando a la database: ' + err.stack);
    return;
  }
  console.log('Conection Correcta to database with threadId: ' + bd.threadId);
});


module.exports = {bd}