import express from "express";
import cors from 'cors'
import routes from "./routes.js";
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger_output.json' assert {type: 'json'}

import './database/connection.js'


const app = express()
app.use(cors())

app.use(express.json())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes)

app.listen('5500')