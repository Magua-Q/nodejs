/*
    查询数据
*/
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'book'
});

connection.connect();

let sql = "select * from book"
let data = null; 
connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();