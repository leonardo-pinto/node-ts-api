export const loginSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    redquired: ['email', 'password']
  }
}
