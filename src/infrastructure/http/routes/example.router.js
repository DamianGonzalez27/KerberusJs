import { Router } from 'express'
import container from '@core/dependency_injector'

const ExampleRoutes = Router()

/**
 * @module Example_http_routes
 * @description
 * Modulo de ejemplo para la creación de rutas para la aplicacion
 */

ExampleRoutes.post(
  '/event',
  container.resolve('exampleExecutor')
)

export default ExampleRoutes
