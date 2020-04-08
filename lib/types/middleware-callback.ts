import { YargsInstance } from './yargs-instance'
import { Arguments } from 'yargs-parser'

export interface MiddlewareCallback {
  (argv: Arguments, yargs: YargsInstance): Partial<Arguments> | Promise<Partial<Arguments>>
}
