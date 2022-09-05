import { serverError } from '../../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      this.validation.validate(httpRequest.body)
      return await new Promise(resolve => resolve(null))
    } catch (error) {
      return serverError(error)
    }
  }
}
