/**
 * @class
 * Definición de una excepcion
 */
class CustomException extends Error {
  http_code = 409
  message = 'Mensaje de tu excepcion'
}

export default CustomException
