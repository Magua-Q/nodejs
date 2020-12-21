/*
    插入数据
*/
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'book'
});

connection.connect();

let sql = "insert into book set ?"
let data = {
    name: "明朝那些事儿",
    author: "当前明月",
    category: "文学",
    description: "明朝的历史"
}
connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();