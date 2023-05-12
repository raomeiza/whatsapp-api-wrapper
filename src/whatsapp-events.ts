import { ConstructorOptions, MessageEvents } from '../typings'

export class WhatsappEvents implements MessageEvents {
  private readonly options: ConstructorOptions
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string
  graphClient: any

  constructor (options: ConstructorOptions) {
    this.token = options.token
    this.PHONE_NUMBER_ID = options.PHONE_NUMBER_ID
    this.WABA_ID = options.WABA_ID
    this.apiVersion = (options.apiVersion != null) ? options.apiVersion : '15'
  }
}
