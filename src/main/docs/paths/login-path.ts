export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API para authenticate users',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      },
      400: {
        $ref: '#/schemas/badRequest'
      },
      401: {
        $ref: '#/schemas/unauthorized'
      },
      500: {
        $ref: '#/schemas/serverError'
      }
    }
  }
}
