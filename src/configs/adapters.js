import { asClass } from 'awilix'
import ExampleAdapter from '@adapters/example/example.adapter'
import DatabaseAdapter from '@adapters/database/database.adapter'

const adapters = {
  exampleAdapter: asClass(ExampleAdapter).singleton(),
  databaseAdapter: asClass(DatabaseAdapter).singleton()
}

export default adapters
