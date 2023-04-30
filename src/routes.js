import { Router } from "express";

const routes = Router()

routes.get('/movies',(req,res)=>res.send(console.log("hello")))

export default routes