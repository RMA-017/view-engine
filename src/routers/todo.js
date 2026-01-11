import { Router } from "express";

const todo = Router()

todo.get("/todo", async (req, res) => {
    res.render("todo")
})

export default todo