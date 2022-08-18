import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const response = sut.validate({ name: 'any_name' })
    expect(response).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const response = sut.validate({ field: 'any_name' })
    expect(response).toBeFalsy()
  })
})
