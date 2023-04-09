import { CustomException } from '@exceptions'
/**
 * @module cases
 * @description
 * Modulo de registro de los casos de uso del microservicio
 */

/**
 * Ejemplo del caso de uso
 *
 * @param {Instance} exampleService Esto es una instancia del ejemplo del servicio
 * @param {String} param Son los parámetros que puede recibir la función
 * @returns {Array}
 */
const UseCase = async (exampleService, param) => {
  try {
    return await exampleService.example(param)
  } catch (error) {
    console.log(error)
    throw new CustomException()
  }
}

export {
  UseCase
}
