import { MiddlewareCallback } from './middleware-callback'

export interface Middleware extends MiddlewareCallback {
  applyBeforeValidation: boolean
}
