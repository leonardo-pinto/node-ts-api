
import MockDate from 'mockdate'
import { SaveSurveyResultModel, SurveyResultModel, SaveSurveyResultRepository } from './db-save-survey-result-protocols'
import { DbSaveSurveyResult } from './db-save-survey-result'

type SutTypes = {
  sut: DbSaveSurveyResult
  saveSurveyResultRepositoryStub: SaveSurveyResultRepository
}

const makeFakeSurveyResultData = (): SaveSurveyResultModel => ({
  accountId: 'any_accountId',
  surveyId: 'any_surveyId',
  answer: 'any_answer',
  date: new Date()
})

const makeFakeSurveyResult = (): SurveyResultModel => Object.assign({}, makeFakeSurveyResultData(), { id: 'any_id' })

const makeSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepository implements SaveSurveyResultRepository {
    async save (_data: SaveSurveyResultModel): Promise<SurveyResultModel> {
      return await new Promise(resolve => resolve(makeFakeSurveyResult()))
    }
  }

  return new SaveSurveyResultRepository()
}

const makeSut = (): SutTypes => {
  const saveSurveyResultRepositoryStub = makeSaveSurveyResultRepository()
  const sut = new DbSaveSurveyResult(saveSurveyResultRepositoryStub)

  return {
    saveSurveyResultRepositoryStub,
    sut
  }
}

describe('DbSaveSurveyResult Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call SaveSurveyResultRepository with correct values', async () => {
    const { sut, saveSurveyResultRepositoryStub } = makeSut()
    const saveSpy = jest.spyOn(saveSurveyResultRepositoryStub, 'save')
    const surveyResultData = makeFakeSurveyResultData()
    await sut.save(surveyResultData)
    expect(saveSpy).toHaveBeenCalledWith(surveyResultData)
  })

  test('Should throw if SaveSurveyResultRepository throws', async () => {
    const { saveSurveyResultRepositoryStub, sut } = makeSut()
    jest.spyOn(saveSurveyResultRepositoryStub, 'save').mockImplementationOnce(async () => {
      return await new Promise((_resolve, reject) => reject(new Error()))
    })
    const promise = sut.save(makeFakeSurveyResultData())
    await expect(promise).rejects.toThrow()
  })
})
