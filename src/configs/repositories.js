import { asClass } from 'awilix'
import DatabaseRepository from '@repos/database/database.repository'
import ExampleRepository from '@repos/example/example.repository'

const repositories = {
  databaseRepository: asClass(DatabaseRepository).singleton(),
  exampleRepository: asClass(ExampleRepository).singleton()
}

export default repositories
