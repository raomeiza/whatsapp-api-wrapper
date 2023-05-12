import { request } from 'https'
import { LoadSchemaFile } from 'runtime-typescript-checker'
import * as validator from './../typings/validate-index'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { existsSync, createReadStream, createWriteStream, writeFile, statSync } from 'fs'
import { ConstructorOptions, DeleteMedia, DownloadFile, GetMediaUrl, GraphClient as GraphClientType, OutBound, SendAudio, SendBulk, SendButtons, SendContact, SendDocument, SendImage, SendList, SendLocation, SendProductList, SendRead, SendSingleProduct, SendSticker, SendTemplateParams, SendText, SendVideo, UploadFile, sendTemplate } from '../typings'
import FormData = require('form-data')
import GraphClient from './lib/graph-client'
import { SendTemplateParam } from '../typings/outbound'

const mediaDef = {
  image: {
    types: ['image/jpeg', 'image/png'],
    max_size: 5 * 1024 * 1024 // 5MB
  },
  audio: {
    types: ['audio/mpeg', 'audio/mp4', 'audio/ogg', 'audio/opus', 'audio/aac', 'audio/amr'],
    max_size: 16 * 1024 * 1024 // 16MB
  },
  voice: {
    types: ['audio/mpeg', 'audio/mp4', 'audio/ogg', 'audio/opus', 'audio/aac', 'audio/amr'],
    max_size: 16 * 1024 * 1024 // 16MB
  },
  video: {
    types: ['video/mp4', 'video/3gpp'],
    max_size: 16 * 1024 * 1024 // 16MB
  },
  document: {
    types: ['text/plain',
      'application/pdf',
      'application/vnd.ms-powerpoint',
      'application/msword',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    max_size: 100 * 1024 * 1024 // 100MB
  },
  sticker: {
    types: ['image/webp'],
    max_size: 100 * 1024 // 100KB
  }
}

class outBound {
  // public async sendTemplate(arg0: {}) {
  //   return await this.graphClient.request('POST', 'messages', { data: arg0 })
  // }
  private readonly options: ConstructorOptions
  validationSchema: any
  validator: typeof validator
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string
  graphClient: any
  constructor (options: ConstructorOptions) {
    this.validator = validator
    // eslint-disable-next-line n/no-path-concat
    this.validationSchema = LoadSchemaFile(__dirname + '/validations/validation.json')
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
    this.options = options
    this.graphClient = new GraphClient(this.options)
  }

  public sendText: SendText = async (data) => {
    const validateSendTextParams = validator.ValidateSendTextParams(data)
    if (!validateSendTextParams.Success) {
      throw new Error(JSON.stringify(validateSendTextParams.Errors))
    }
    return await this.graphClient.request('POST', 'messages', { data })
  }

  public sendAudio: SendAudio = async (data) => {
    const validateSendAudioParams = validator.ValidateSendAudioParams(data)
    if (!validateSendAudioParams.Success) {
      throw new Error(JSON.stringify(validateSendAudioParams.Errors))
    }
    if (data?.audio?.path !== undefined) {
      try {
        const upload = await this.uploadFile({
          type: 'audio',
          data: {
            file: data.audio.path
          }
        })
        console.log(upload)
        // @ts-expect-error
        data.audio.id = upload.id
        delete data.audio.path
        return await this.graphClient('post', 'message', { data })
      } catch (error: any) {
        return error
      }
    }
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
      return await this.graphClient.post('messages', data)
    })
    // allow all promises to resolve failed or not
    return await Promise.all(promises)
  }

  public uploadFile: UploadFile = async (data) => {
    const validateUploadFileParams = validator.ValidateUploadFile(data)
    if (!validateUploadFileParams.Success) {
      throw new Error(JSON.stringify(validateUploadFileParams.Errors))
    }
    const { type } = data
    // get the file details using fs
    if (!Object.prototype.hasOwnProperty.call(mediaDef, type)) {
      throw new Error('media type not suported')
    }
    const fileDetails = statSync(data.data.file)
    if (!fileDetails.isFile()) {
      throw new Error('"File" is not a file')
    }

    if (fileDetails.size === 0) {
      throw new Error('File size is 0')
    }

    if (mediaDef[type].max_size < fileDetails.size) {
      throw new Error('file size bigger than acceptable size')
    }
    return await this.graphClient.uploadFile(data)
  }

  public getMediaUrl: GetMediaUrl = async (data) => {
    const validateGetMediaParams = validator.ValidateGetMediaUrl(data)
    if (!validateGetMediaParams.Success) {
      throw new Error(JSON.stringify(validateGetMediaParams.Errors))
    }
    return await this.graphClient.getMediaUrl(data.id)
  }

  public deleteMedia: DeleteMedia = async (data) => {
    const validateDeleteMediaParams = validator.ValidateDeleteMedia(data)
    if (!validateDeleteMediaParams.Success) {
      throw new Error(JSON.stringify(validateDeleteMediaParams.Errors))
    }
    return await this.graphClient.deleteMedia(data.id, 'DELETE')
  }
  // public sendQuickReplies: SendQuickReplies = async (chatId, quickReplies, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/messages?recipient=${
  //   chatId}&message=`
  //   return this.graphClient('POST', path, quickReplies)
  // }

  public downloadFile: DownloadFile = async (data) => {
    const validateGetMediaParams = validator.ValidateGetMediaUrl(data)
    if (!validateGetMediaParams.Success) {
      throw new Error(JSON.stringify(validateGetMediaParams.Errors))
    }
    console.log('data', data)
    // if data.id is provided, we will have to get the media url first using getMediaUrl
    // @ts-expect-error
    if (data.id) {
      // @ts-expect-error
      const { url } = await this.graphClient.getMediaUrl(data.id)
      return await this.downloadFile({ url })
    }
    // @ts-expect-error
    return await this.graphClient.getMediaUrl(data.url)
  }

  public sendTemplate: sendTemplate = async (data) => {
    const validateSendTemplateParams = validator.ValidateSendTemplateParams(data)
    if (!validateSendTemplateParams.Success) {
      throw new Error(JSON.stringify(validateSendTemplateParams.Errors))
    }
    return await this.graphClient.request(
      'POST',
      'messages',
      data
    )
  }

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
