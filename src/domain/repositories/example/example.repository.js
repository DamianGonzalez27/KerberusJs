/**
 * @class
 * Ejemplo de repositorio
 */
class ExampleRepository {
  constructor (exampleAdapter) {
    this.adapter = exampleAdapter
  }

  async save () {
    return 'test'
  }
}

export default ExampleRepository
