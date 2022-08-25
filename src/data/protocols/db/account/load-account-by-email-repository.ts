import { AccountModel } from '../../../usecases/add-account/db-add-accounts-protocols'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}
