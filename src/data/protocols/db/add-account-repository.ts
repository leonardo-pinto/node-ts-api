import { AddAccountModel } from '../../usecases/add-account/db-add-accounts-protocols'
import { AccountModel } from '../../../domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
