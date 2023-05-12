import { LoadSchemaFile } from 'runtime-typescript-checker'
import { ConstructorOptions } from '../typings'
import GraphClient from './lib/graph-client'
import path = require('path')

export class Base {
  // public async sendTemplate(arg0: {}) {
  //   return this.graphClient.request('POST', 'messages', { data: arg0 })
  // }
  private readonly options: ConstructorOptions
  validationSchema: any
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string
  graphClient: any
  validator: any
  constructor (options: ConstructorOptions) {
    // eslint-disable-next-line n/no-path-concat
    this.validationSchema = LoadSchemaFile(path.join(__dirname, 'validations', 'validation.json'))
    if (this.validationSchema == null) {
      throw new Error('Failed to load validation schema')
    }
    this.token = options.token
    this.WABA_ID = options.WABA_ID
    this.PHONE_NUMBER_ID = options.PHONE_NUMBER_ID
    this.apiVersion = (options.apiVersion != null) ? options.apiVersion : 'v14.0'
    this.options = options
    this.graphClient = new GraphClient(this.options)
  }
}
