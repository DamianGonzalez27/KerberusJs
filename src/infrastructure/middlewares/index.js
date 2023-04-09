/**
 * @module http_middlewares
 * @description
 * Colección de midlewares aplicacbles a la logica general del negocio
 */

/**
 * Decorador de respuestas de error para el cliente
 * @param {object} err Objeto con la excepcion que generó el error
 *
 * @returns {object} Retorna una respuesta con un codigo de error y un mensaje
 */
const DecoratorErrorResponse = async (err, req, res, next) => {
  if (await err) {
    return res.status(err.http_code)
      .json({
        status: 'error',
        body: err.message
      })
  }
}

/**
 * Usa este middleware en los endpoints en donde necesites
 * validar los datos que te manda el usuario en el request
 *
 * @param {Object} schema Es el Schema a validar de yup
 * @returns {Callback}
 */
const ValidateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body)
      next()
    } catch (error) {
      res.status(409)
        .json({
          status: 'error',
          body: error.errors
        })
    }
  }
}

export {
  DecoratorErrorResponse,
  ValidateRequest
}
