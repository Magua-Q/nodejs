/*
    删除数据
*/
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'book'
});

connection.connect();

let sql = "delete from book where id = ?"
let data = [6];

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
//   console.log(results);
    if (results.affectedRows === 1) {
        console.log("数据删除成功");
    }
});

connection.end();