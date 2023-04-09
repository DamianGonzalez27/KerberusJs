import { createContainer, asValue } from 'awilix'
import configs from '@configs/generals'
import executors from '@configs/executors'
import adapters from '@configs/adapters'
import repositories from '@configs/repositories'
import services from '@configs/services'

const container = createContainer()

container.register({
  ...adapters,
  ...executors,
  ...repositories,
  ...services,
  configs: asValue(configs)
})

export default container
