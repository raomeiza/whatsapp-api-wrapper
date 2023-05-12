import * as mediaValidator from './../typings/validate-media'
import { statSync } from 'fs'
import { DeleteMedia, DownloadFile, GetMediaUrl, /* GraphClient as GraphClientType, OutBound, */ UploadFile } from '../typings'
import { Base } from './base'
import { ConstrucorOptions } from '../typings/outbound'

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

export class Media extends Base {
  mediaValidator: typeof mediaValidator
  constructor (options: ConstrucorOptions) {
    super(options)
    this.mediaValidator = mediaValidator
    this.mediaValidator.Configure(this.validationSchema)
  }

  public uploadFile: UploadFile = async (data) => {
    const validateUploadFileParams = mediaValidator.ValidateUploadFile(data)
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
    return this.graphClient.uploadFile(data)
  }

  public getMediaUrl: GetMediaUrl = async (data) => {
    const validateGetMediaParams = mediaValidator.ValidateGetMediaUrl(data)
    if (!validateGetMediaParams.Success) {
      throw new Error(JSON.stringify(validateGetMediaParams.Errors))
    }
    return this.graphClient.getMediaUrl(data.id)
  }

  public deleteMedia: DeleteMedia = async (data) => {
    const validateDeleteMediaParams = mediaValidator.ValidateDeleteMedia(data)
    if (!validateDeleteMediaParams.Success) {
      throw new Error(JSON.stringify(validateDeleteMediaParams.Errors))
    }
    return this.graphClient.deleteMedia(data.id, 'DELETE')
  }

  public downloadFile: DownloadFile = async (data) => {
    if ((data.url == null) && (data.id == null)) { throw new Error('file id or url must be provided') }
    if ((data.url != null) && (data.id != null)) throw new Error('You can only provide file url or id')
    const validateGetMediaParams = mediaValidator.ValidateGetMediaUrl(data)
    if (!validateGetMediaParams.Success) {
      throw new Error(JSON.stringify(validateGetMediaParams.Errors))
    }
    console.log('data', data)
    // if data.id is provided, we will have to get the media url first using getMediaUrl
    if (data.id != null) {
      const { url } = await this.graphClient.getMediaUrl(data.id)
      return await this.downloadFile({ url })
    }
    return this.graphClient.getMediaUrl(data.url)
  }
}
