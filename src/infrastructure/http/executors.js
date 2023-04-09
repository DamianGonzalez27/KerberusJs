import { UseCase } from '@cases'
/**
 * @module http_executors
 * @description
 * Aqui se registran las funciones ejecutoras y controladoras de las peticiones http,
 * es una capa intermedia entre la infraestructura y la capa de aplicación.
 */

/**
 * Ejemplo de función ejecutora de un caso de uso para una petición http
 *
 * @param {Instance} exampleService - Instancia del servicio que usarán los casos de uso
 * @returns {Response}
 */
const ExecuteUseCase = ({ exampleService }) => {
  return async (req, res, next) => {
    try {
      res.json({
        status: 'success',
        body: await UseCase(exampleService, 'Test')
      })
    } catch (error) {
      next(error)
    }
  }
}

export {
  ExecuteUseCase
}
