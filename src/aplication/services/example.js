/**
 * @class
 * Ejemplo de implementación de un servicio
 */
class ExampleService {
  constructor ({ databaseRepository }) {
    this.databaseRepository = databaseRepository
  }

  async example (param) {
    return this.databaseRepository.myFunct(param)
  }
}

export default ExampleService
