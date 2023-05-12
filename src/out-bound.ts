/* eslint-disable @typescript-eslint/no-throw-literal */
import * as outboundValidator from './../typings/validate-outbound'
import { Media } from './media'
import { /* GraphClient as GraphClientType, OutBound, */ SendAudio, SendBulk, SendButtons, SendContact, SendDocument, SendImage, SendList, SendLocation, SendProductList, SendRead, SendSingleProduct, SendSticker, /* SendTemplateParams, */ SendText, SendVideo, sendTemplate } from '../typings'
import { ConstrucorOptions } from '../typings/outbound'

class outBound extends Media {
  outboundValidator: typeof outboundValidator
  constructor (options: ConstrucorOptions) {
    super(options)
    this.outboundValidator = outboundValidator
  }

  public sendText: SendText = async (data) => {
    // const validateSendTextParams = outboundValidator.ValidateSendTextParams(data)
    // if (!validateSendTextParams.Success) {
    //   throw validateSendTextParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'text', recipientType: 'individual' })
  }

  public sendAudio: SendAudio = async (data) => {
    // const validateSendAudioParams = outboundValidator.ValidateSendAudioParams(data)
    // if (!validateSendAudioParams.Success) {
    //   throw validateSendAudioParams.Errors
    // }
    if (data?.audio?.path !== undefined) {
      try {
        const upload = await this.uploadFile({
          type: 'audio',
          data: {
            file: data.audio.path
          }
        })
        console.log('upload', upload)
        // @ts-expect-error
        data.id = upload.id
        delete data.audio.path
      } catch (error: any) {
        console.log(error)
        throw error
      }
    }
    console.log('data', data)
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'audio', recipientType: 'individual' })
  }

  public sendImage: SendImage = async (data) => {
    // const validateSendImageParams = outboundValidator.ValidateSendImageParams(data)
    // if (!validateSendImageParams.Success) {
    //   throw validateSendImageParams.Errors
    // }
    if (data?.image?.path !== undefined) {
      try {
        const upload = await this.uploadFile({
          type: 'audio',
          data: {
            file: data.image.path
          }
        })
        console.log('upload', upload)
        // @ts-expect-error
        data.image.id = upload.id
        delete data.image.path
      } catch (error: any) {
        console.log(error)
        throw error
      }
    }
    const data2 = { ...data, type: 'image', recipientType: 'individual' }
    console.log('data2', data2)
    return this.graphClient.request({ method: 'POST', path: 'messages' }, data2)
  }

  public sendVideo: SendVideo = async (data) => {
    // const validateSendVideoParams = outboundValidator.ValidateSendVideoParams(data)
    // if (!validateSendVideoParams.Success) {
    //   throw validateSendVideoParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'video', recipientType: 'individual' })
  }

  public sendContact: SendContact = async (data) => {
    // const validateSendContactParams = outboundValidator.ValidateSendContactParams(data)
    // if (!validateSendContactParams.Success) {
    //   throw validateSendContactParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'contact', recipientType: 'individual' })
  }

  public sendLocation: SendLocation = async (data) => {
    // const validateSendLocationParams = outboundValidator.ValidateSendLocationParams(data)
    // if (!validateSendLocationParams.Success) {
    //   throw validateSendLocationParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'location', recipientType: 'individual' })
  }

  public sendSticker: SendSticker = async (data) => {
    // const validateSendStickerParams = outboundValidator.ValidateSendStickerParams(data)
    // if (!validateSendStickerParams.Success) {
    //   throw validateSendStickerParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'sticker', recipientType: 'individual' })
  }

  public sendDocument: SendDocument = async (data) => {
    // const validateSendDocumentParams = outboundValidator.ValidateSendTextParams(data)
    // if (!validateSendDocumentParams.Success) {
    //   throw validateSendDocumentParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'document', recipientType: 'individual' })
  }

  public sendButtons: SendButtons = async (data) => {
    // const validateSendButtonsParams = outboundValidator.ValidateSendTextParams(data)
    // if (!validateSendButtonsParams.Success) {
    //   rror(validateSendButtonsParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'interactive', recipientType: 'individual' })
  }

  public sendList: SendList = async (data) => {
    // const validateSendListParams = outboundValidator.ValidateSendTextParams(data)
    // if (!validateSendListParams.Success) {
    //   rror(validateSendListParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'interactive', recipientType: 'individual' })
  }

  public sendRead: SendRead = async (data) => {
    // const validateSendReadParams = outboundValidator.ValidateSendAudioParams(data)
    // if (!validateSendReadParams.Success) {
    //   throw validateSendReadParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'text', recipientType: 'individual' })
  }

  // public sendOrder: SendOrder = async (data) => this.graphClient('POST', 'messages', {data})

  // public sendPaused: SendPaused = async (data) => this.graphClient('POST', 'messages', {data})

  // public sendResumed: SendResumed = async (data) => this.graphClient('POST', 'messages', {data})

  public sendSingleProduct: SendSingleProduct = async (data) => {
    // const validateSendSingleProductParams = outboundValidator.ValidateSendProductParams(data)
    // if (!validateSendSingleProductParams.Success) {
    //   throw validateSendSingleProductParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'interactive', recipientType: 'individual' })
  }

  public sendProductList: SendProductList = async (data) => {
    // const validateSendProductListParams = outboundValidator.ValidateSendProductListParams(data)
    // if (!validateSendProductListParams.Success) {
    //   throw validateSendProductListParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'interactive', recipientType: 'individual' })
  }

  public sendBulk: SendBulk = async (data) => {
    const { type, recipients, ...rest } = data
    if (!Array.isArray(recipients) || recipients.length === 0) {
      throw new Error('Recipients must be an array and not empty')
    }

    // const validateSendBulkParams = outboundValidator.ValidateSendAudioParams(data)

    // if (!validateSendBulkParams.Success) {
    //   throw validateSendBulkParams.Errors
    // }
    // promise all
    const promises = data.recipients.map(async (to: string) => {
      // @ts-expect-error
      const data = { data: { ...rest[type], to } }
      return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'text', recipientType: 'individual' })
    })
    // allow all promises to resolve failed or not
    return await Promise.all(promises)
  }

  // public sendQuickReplies: SendQuickReplies = async (chatId, quickReplies, options?) => {
  //   const path = `${this.apiVersion}/${this.WABA_ID}/messages?recipient=${
  //   chatId}&message=`
  //   return this.graphClient('POST', path, quickReplies)
  // }

  public sendTemplate: sendTemplate = async (data) => {
    // const validateSendTemplateParams = outboundValidator.ValidateSendTemplateParams(data)
    // if (!validateSendTemplateParams.Success) {
    //   throw validateSendTemplateParams.Errors
    // }
    return this.graphClient.request({ method: 'POST', path: 'messages' }, { ...data, type: 'template', recipientType: 'individual' })
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
