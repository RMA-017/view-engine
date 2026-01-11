import express from "express"
import homeRouter from "./src/routers/home.js"
import path from "path"
import { fileURLToPath } from "url"
import errorRouter from "./src/routers/404.js"
import todo from "./src/routers/todo.js"
import news from "./src/routers/news.js"

let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"))

app.use(express.json())
app.use("/public", express.static("public"))
app.use(homeRouter)
app.use(todo)
app.use(news)

app.use(errorRouter)

app.listen(3000, () => {
    console.log("port 3000");
})


