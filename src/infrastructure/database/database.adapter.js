/**
 * @class
 */
class DatabaseAdapter {
  /**
   * Este adaptador debe recibir una instancia del cliente con el que deseas interactuar,
   * ya sea que quieras desarrollar un adaptador para mongoose, sequelize o dynamodb, aqui
   * tienes que colocar las abstracciones necesarias para interactuar con el cliente
   *
   * @param {Instance} client Instancia del cliente
   */
  constructor () {
    this.client = 'test'
  }

  /**
   * Example
   *
   * @param {Object} params - Parámetros de interaccion con el cliente
   * @returns {Any} El cliente puede retornar los valores que necesites
   */
  async example () {
    return 'hola mundo'
  }
}

export default DatabaseAdapter
