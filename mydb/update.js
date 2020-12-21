/*
    修改数据
*/
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'book'
});

connection.connect();

let sql = "update book set name=?, author=?, category=?, description=? where id=?"
let data = ["浪潮之巅", "吴军", "计算机", "It巨头的兴衰史", 7]

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
//   console.log(results);
    if (results.affectedRows === 1) {
        console.log("数据更新成功");
    }
});

connection.end();