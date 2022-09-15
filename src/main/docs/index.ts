import { badRequest, serverError, unauthorized } from './components'
import { loginPath } from './paths'
import { accountSchema, errorSchema, loginSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API to create surveys',
    version: '1.0'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginSchema,
    errorSchema: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized
  }
}
