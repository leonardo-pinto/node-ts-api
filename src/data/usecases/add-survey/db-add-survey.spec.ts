import { AddSurveyModel, AddSurveyRepository } from './db-add-survey-protocols'
import { DbAddSurvey } from './db-add-survey'
import MockDate from 'mockdate'

interface SutTypes {
  sut: DbAddSurvey
  dbAddSurveyRepositoryStub: AddSurveyRepository
}

const makeFakeSurveyData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [
    {
      image: 'any_image',
      answer: 'any_answer'
    }
  ],
  date: new Date()
})

const makeDbAddSurveyRepository = (): AddSurveyRepository => {
  class DbAddSurveyRepositoryStub {
    async add (_data: AddSurveyModel): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }

  return new DbAddSurveyRepositoryStub()
}

const makeSut = (): SutTypes => {
  const dbAddSurveyRepositoryStub = makeDbAddSurveyRepository()
  const sut = new DbAddSurvey(dbAddSurveyRepositoryStub)

  return {
    dbAddSurveyRepositoryStub,
    sut
  }
}

describe('DbAddSurvey Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  test('Should call AddSurveyRepository with correct values', async () => {
    const { sut, dbAddSurveyRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(dbAddSurveyRepositoryStub, 'add')
    const surveyData = makeFakeSurveyData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })

  test('Should throw if AddSurveyRepository throws', async () => {
    const { dbAddSurveyRepositoryStub, sut } = makeSut()
    jest.spyOn(dbAddSurveyRepositoryStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((_resolve, reject) => reject(new Error()))
    })
    const promise = sut.add(makeFakeSurveyData())
    await expect(promise).rejects.toThrow()
  })
})
