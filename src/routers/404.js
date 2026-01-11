import { Router } from "express";

const errorRouter = Router()

errorRouter.use((req, res) => {
    res.status(404).render("error")
})

export default errorRouter