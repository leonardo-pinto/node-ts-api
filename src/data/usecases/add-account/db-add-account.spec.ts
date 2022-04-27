import { DbAddAccount } from './db-add-account'

describe('DbAddAccount Usecase', () => {
  test('Should Encrypter with correct password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed password'))
      }
    }

    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    }

    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('any_password')
  })
})
