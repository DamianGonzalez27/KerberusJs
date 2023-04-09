import { asFunction } from 'awilix'
import { ExecuteUseCase } from '@adapters/http/executors'

const executors = {
  exampleExecutor: asFunction(ExecuteUseCase).singleton()
}

export default executors
