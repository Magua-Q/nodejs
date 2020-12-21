/*
    测试通用api
*/
const db = require("./db.js");

// 插入操作
let sql = "insert into book set ?";
let data = {
    name: "你不知道的JavaScript",
    author: "未知",
    category: "编程",
    description: "关于变成的一些问题"
}
db.base(sql,data, (res) => {
    console.log(res);
});