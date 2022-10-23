import { request } from 'https'
import { LoadSchemaFile } from 'runtime-typescript-checker'
import * as validator from './../typings/validate-index'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { existsSync, createReadStream, createWriteStream, writeFile } from 'fs'
import { ConstructorOptions, GraphClient, OutBound, SendAudio, SendBulk, SendButtons, SendContact, SendDocument, SendImage, SendList, SendLocation, SendProductList, SendRead, SendSingleProduct, SendSticker, SendText, SendVideo } from '../typings'

class outBound implements OutBound {
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string | undefined
  validationSchema: any
  validator: typeof validator
  constructor (options: ConstructorOptions) {
    this.validator = validator
    // eslint-disable-next-line n/no-path-concat
    this.validationSchema = LoadSchemaFile(__dirname + '/validations/index.json')
    if (this.validationSchema == null) {
      throw new Error('Failed to load validation schema')
    }
    this.validator.Configure(this.validationSchema)
    const validateConstructorOptions = validator.ValidateConstructorOptions(options)
    if (!validateConstructorOptions.Success) {
      throw new Error(JSON.stringify(validateConstructorOptions.Errors))
    }
    this.token = options.token
    this.WABA_ID = options.WABA_ID
    this.PHONE_NUMBER_ID = options.PHONE_NUMBER_ID
    this.apiVersion = (options.apiVersion != null) ? options.apiVersion : 'v14.0'
  }

  public graphClient: GraphClient = async (method = 'POST', path = 'messages', data?) => {
    return await new Promise((resolve, reject) => {
      const options = {
        hostname: 'graph.facebook.com',
        port: 443,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        path: `/${this.apiVersion}/${this.PHONE_NUMBER_ID}/${path}`,
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      }
      const req = request(options, (res) => {
        let body = ''
        res.on('data', (chunk) => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          body += chunk
        })
        res.on('end', () => {
          resolve(body)
        })
      })
      req.on('error', (error) => {
        req.end()
        reject(error)
      })
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (data?.data?.type === 'file' && data?.data?.file) {
        const file = createReadStream(data.data?.file)
        file.pipe(req)
      } else {
        const fdata = JSON.stringify({ messaging_product: 'whatsapp', ...data?.data })
        req.write(fdata)
      }
      req.end()
    })
  }

  public sendText: SendText = async (data) => {
    const validateSendTextParams = validator.ValidateSendTextParams(data)
    if (!validateSendTextParams.Success) {
      throw new Error(JSON.stringify(validateSendTextParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendAudio: SendAudio = async (data) => {
    const validateSendAudioParams = validator.ValidateSendAudioParams(data)
    if (!validateSendAudioParams.Success) {
      throw new Error(JSON.stringify(validateSendAudioParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendImage: SendImage = async (data) => {
    const validateSendImageParams = validator.ValidateSendImageParams(data)
    if (!validateSendImageParams.Success) {
      throw new Error(JSON.stringify(validateSendImageParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendVideo: SendVideo = async (data) => {
    const validateSendVideoParams = validator.ValidateSendVideoParams(data)
    if (!validateSendVideoParams.Success) {
      throw new Error(JSON.stringify(validateSendVideoParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendContact: SendContact = async (data) => {
    const validateSendContactParams = validator.ValidateSendContactParams(data)
    if (!validateSendContactParams.Success) {
      throw new Error(JSON.stringify(validateSendContactParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendLocation: SendLocation = async (data) => {
    const validateSendLocationParams = validator.ValidateSendLocationParams(data)
    if (!validateSendLocationParams.Success) {
      throw new Error(JSON.stringify(validateSendLocationParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendSticker: SendSticker = async (data) => {
    const validateSendStickerParams = validator.ValidateSendStickerParams(data)
    if (!validateSendStickerParams.Success) {
      throw new Error(JSON.stringify(validateSendStickerParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendDocument: SendDocument = async (data) => {
    const validateSendDocumentParams = validator.ValidateSendDocumentParams(data)
    if (!validateSendDocumentParams.Success) {
      throw new Error(JSON.stringify(validateSendDocumentParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendButtons: SendButtons = async (data) => {
    const validateSendButtonsParams = validator.ValidateSendButtonsParams(data)
    if (!validateSendButtonsParams.Success) {
      throw new Error(JSON.stringify(validateSendButtonsParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendList: SendList = async (data) => {
    const validateSendListParams = validator.ValidateSendListParams(data)
    if (!validateSendListParams.Success) {
      throw new Error(JSON.stringify(validateSendListParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendRead: SendRead = async (data) => {
    const validateSendReadParams = validator.ValidateSendReadParams(data)
    if (!validateSendReadParams.Success) {
      throw new Error(JSON.stringify(validateSendReadParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  // public sendOrder: SendOrder = async (data) => this.graphClient('POST', 'messages', {data})

  // public sendPaused: SendPaused = async (data) => this.graphClient('POST', 'messages', {data})

  // public sendResumed: SendResumed = async (data) => this.graphClient('POST', 'messages', {data})

  public sendSingleProduct: SendSingleProduct = async (data) => {
    const validateSendSingleProductParams = validator.ValidateSendProductParams(data)
    if (!validateSendSingleProductParams.Success) {
      throw new Error(JSON.stringify(validateSendSingleProductParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendProductList: SendProductList = async (data) => {
    const validateSendProductListParams = validator.ValidateSendProductListParams(data)
    if (!validateSendProductListParams.Success) {
      throw new Error(JSON.stringify(validateSendProductListParams.Errors))
    }
    return await this.graphClient('POST', 'messages', { data })
  }

  public sendBulk: SendBulk = async (data) => {
    const { type, recipients, ...rest } = data
    if (!Array.isArray(recipients) || recipients.length === 0) {
      throw new Error('Recipients must be an array and not empty')
    }

    const validateSendBulkParams = validator.ValidateSendBulkParams(data)

    if (!validateSendBulkParams.Success) {
      throw new Error(JSON.stringify(validateSendBulkParams.Errors))
    }
    // promise all
    const promises = data.recipients.map(async (to: string) => {
      // @ts-expect-error
      const data = { data: { ...rest[type], to } }
      return await this.graphClient('POST', 'messages', data)
    })
    // allow all promises to resolve failed or not
    return await Promise.all(promises)
  }
  // public sendQuickReplies: SendQuickReplies = async (chatId, quickReplies, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/messages?recipient=${
  //   chatId}&message=`
  //   return this.graphClient('POST', path, quickReplies)
  // }

  // public sendTemplate: SendTemplate = async (chatId, template, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/messages?recipient=${
  //   chatId}&message=`
  //   return this.graphClient('POST', path, template)
  // }

  // public getGroupInfo: GetGroupInfo = async (chatId, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/groups/${chatId}`
  //   return this.graphClient('GET', path, this.token)
  // }

  // public getGroupMembers: GetGroupMembers = async (chatId, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/groups/${chatId}/participants`
  //   return this.graphClient('GET', path, this.token)
  // }

  // public getGroupAdmins: GetGroupAdmins = async (chatId, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/groups/${chatId}/admins`
  //   return this.graphClient('GET', path, this.token)
  // }

  // public getGroupInviteLink: GetGroupInviteLink = async (chatId, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/groups/${chatId}/invite_link`
  //   return this.graphClient('GET', path, this.token)
  // }

  // public getGroupParticipant: GetGroupParticipant = async (chatId, participantId, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/groups/${chatId}/participants/${participantId}`
  //   return this.graphClient('GET', path, this.token)
  // }
}

export default outBound
