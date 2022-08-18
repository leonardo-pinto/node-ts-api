import { MissingParamError } from '../../errors'
import { Validation } from '../../protocols'
import { ValidationComposite } from './validation-composite'

interface SutType {
  sut: ValidationComposite
  validationStubs: Validation[]
}

const makeValidationStub = (): Validation => {
  class ValidationStub implements Validation {
    validate (_input: any): Error {
      return null
    }
  }

  return new ValidationStub()
}

const makeSut = (): SutType => {
  const validationStubs = [makeValidationStub(), makeValidationStub()]
  const sut = new ValidationComposite(validationStubs)

  return {
    sut,
    validationStubs
  }
}

describe('ValidationComposite', () => {
  test('Should return the first error if more than one validation fails', () => {
    const { sut, validationStubs } = makeSut()
    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamError('field'))

    const response = sut.validate({ field: 'any_value' })
    expect(response).toEqual(new Error())
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const response = sut.validate({ field: 'any_value' })
    expect(response).toBeFalsy()
  })
})
