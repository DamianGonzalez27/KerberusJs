/**
 * @module Server
 *
 * @description
 * Este modulo ejecuta el servidor de express, esta diseñado para ser implementado en una infraestructura de
 * contenedores
 */

import dotenv from 'dotenv'
import app from '@core/http_app'

dotenv.config()

const port = process.env.PORT
const appName = process.env.APP_NAME

app.listen(port, () => {
  console.log(`Example ${appName} listening on port ${port}`)
})
