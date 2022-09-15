import { MissingParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols'
import { mockValidation } from '@/presentation/test'
import { ValidationComposite } from './validation-composite'

type SutType = {
  sut: ValidationComposite
  validationStubs: Validation[]
}

const makeSut = (): SutType => {
  const validationStubs = [mockValidation(), mockValidation()]
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
