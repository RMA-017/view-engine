import { Router } from "express";

const home = Router()

home.get("/", async (req, res) => {
    res.render("index")
})

export default home;