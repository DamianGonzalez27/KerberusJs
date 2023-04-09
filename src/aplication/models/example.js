import yup from 'yup'
/**
 * @module request
 * @description
 * Aqui se registran los modelos de datos que manejarán los request de la aplicación http
 */

/**
 * Ejemplo de un modelo de request
 */
const ExampleRequest = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
})

export {
  ExampleRequest
}
