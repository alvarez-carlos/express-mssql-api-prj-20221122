import express from "express";
import config from './config'
import { chargeImportRoutes, productionRoutes } from './routes'
import cors from 'cors'

const app = express()

// setting
app.set('port', config.PORT)
app.use(cors())

//use of middleware to set the server to accept json data form
app.use(express.json()) //to be able to get json data
// app.use(express.urlencoded({extended: true})) // to be able to get hrml form data


app.use(chargeImportRoutes)
app.use(productionRoutes)

export default app