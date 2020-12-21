/*
    后台接口开发
*/ 
const express = require("express");
const app = express();
const db = require("./db.js")

// 制定API路径 allbooks
app.get("/allBooks", (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.json(result)
    })
})

app.listen(3000, () => {
    console.log("running...");
})