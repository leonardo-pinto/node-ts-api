import { AccountModel } from '../usecases/add-account/db-add-accounts-protocols'

export interface LoadAccountByEmailRepository {
  load: (email: string) => Promise<AccountModel>
}