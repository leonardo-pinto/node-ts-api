export const surveyPath = {
  get: {
    security: [
      {
        apiKeyAuth: []
      }
    ],
    tags: ['Survey'],
    summary: 'List all surveys',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveys'
            }
          }
        }
      },
      403: {
        $ref: '#/schemas/forbidden'
      },
      500: {
        $ref: '#/schemas/serverError'
      }
    }
  },
  post: {
    security: [
      {
        apiKeyAuth: []
      }
    ],
    tags: ['Survey'],
    summary: 'Create a new survey',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSurveyParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Success'
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
