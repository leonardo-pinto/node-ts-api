import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'field_confirmation')
}

describe('CompareFieldsValidation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const response = sut.validate({ field: 'any', field_confirmation: 'any_other' })
    expect(response).toEqual(new InvalidParamError('field_confirmation'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const response = sut.validate({ field: 'any', field_confirmation: 'any' })
    expect(response).toBeFalsy()
  })
})
