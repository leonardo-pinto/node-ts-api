export const signUpPath = {
  post: {
    tags: ['Login'],
    summary: 'Create an user account',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/signUpParams'
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
      403: {
        $ref: '#/schemas/forbidden'
      },
      500: {
        $ref: '#/schemas/serverError'
      }
    }
  }
}
