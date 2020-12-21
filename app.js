let express = require("express");
const path = require("path")
const template = require("art-template")
let bodyParser = require("body-parser")
const port = 3000;

let app = express();
// 设置模板的路径
app.set("views", path.join(__dirname, 'views'))
// 设置模板引擎
app.set("view engine", 'art')
// 使express兼容art-template
app.engine("art", require("express-art-template"))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static(__dirname + "/public"))

app.get("/list", (req, res) => {
    // res.send("hello world!")
    let data = {
        title: "水果",
        list: ["apple", 'orange', "banana"]
    }
    res.render("list", data)
})
app.use("/user", require("./routes/user.js"))

app.listen(port, () => {
    console.log(`${port}服务已启动`)
})