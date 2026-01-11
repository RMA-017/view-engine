import { Router } from "express";

const news = Router()

news.get("/news", (req, res) => {
    res.render("news")
})

export default news