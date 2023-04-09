import { asClass } from 'awilix'
import ExampleService from '@services/example'

const services = {
  exampleService: asClass(ExampleService).singleton()
}

export default services
