export const surveyResultPath = {
  put: {
    tags: ['Survey'],
    summary: 'Answer a survey',
    security: [
      {
        apiKeyAuth: []
      }
    ],
    parameters: [
      {
        in: 'path',
        name: 'surveyId',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/saveSurveyParams'
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
              $ref: '#/schemas/surveyResult'
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
  }
}
