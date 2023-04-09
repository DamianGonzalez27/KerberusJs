/**
 * @module app
 * @description
 * Aquí esta escrita la aplicación que maneja las peticiones http del proyecto
 */
import express from 'express'
import cookieParser from 'cookie-parser'
import useragent from 'express-useragent'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import corsConfig from '@configs/cors'
import { DecoratorErrorResponse } from '@middlewares'
import Routes from '@adapters/http'
const app = express()

app.use(express.json())
app.use(useragent.express())
app.use(cookieParser())
app.use(express.json())
app.use(cors(corsConfig))
app.use(fileUpload())

for (const route of Routes) {
  app.use(route)
}

app.use(DecoratorErrorResponse)

export default app
