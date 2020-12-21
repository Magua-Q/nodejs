/*
    操作数据库
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'book'
});

connection.connect();

connection.query('SELECT count(*) AS total from book', function (error, results, fields) {
  if (error) throw error;
  console.log('The total is: ', results[0].total);
});

connection.end();