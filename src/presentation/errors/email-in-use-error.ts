export class EmailInUseError extends Error {
  constructor () {
    super('The received email ins already in use')
    this.name = 'EmailInUseError'
  }
}
