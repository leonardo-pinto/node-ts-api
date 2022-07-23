import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default content type as json ', async () => {
    app.get('/test-content-type-json', (_req, res) => {
      res.send('')
    })

    await request(app)
      .get('/test-content-type-json')
      .expect('content-type', /json/)
  })

  test('Should return content type as xml if forced ', async () => {
    app.get('/test-content-type-xml', (_req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test-content-type-xml')
      .expect('content-type', /xml/)
  })
})
