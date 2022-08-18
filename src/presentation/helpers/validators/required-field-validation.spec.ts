import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')

    const response = sut.validate({ name: 'any_name' })
    expect(response).toEqual(new MissingParamError('field'))
  })

  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')

    const response = sut.validate({ name: 'any_name' })
    expect(response).toEqual(new MissingParamError('field'))
  })
})
