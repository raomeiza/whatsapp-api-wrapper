/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { createReadStream } from 'node:fs'
import axios from 'axios'
import { ConstructorOptions } from '../../typings'
import FormData = require('form-data')
import { PathLike, createReadStream, createWriteStream /* writeFileSync */ } from 'fs'
// import { Stream } from 'stream'

class GraphClient {
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string
  constructor (options: ConstructorOptions) {
    this.token = options.token
    this.WABA_ID = options.WABA_ID
    this.PHONE_NUMBER_ID = options.PHONE_NUMBER_ID
    this.apiVersion = (options.apiVersion != null) ? options.apiVersion : 'v14.0'
  }

  // create a request method for sending messages withouth media
  public readonly request = async (requestParams: { method?: string, path: string, PHONE_NUMBER_ID?: string, WABA_ID?: string, query?: any }, data?: any): Promise<any> => {
    return await new Promise((resolve, reject) => {
      const options = {
        url: `https://graph.facebook.com/${this.apiVersion}/${(requestParams.PHONE_NUMBER_ID !== '' ? this.PHONE_NUMBER_ID : requestParams.PHONE_NUMBER_ID)}/${requestParams.path}`,
        method: requestParams.method || 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        },
        data: { ...data, messaging_product: 'whatsapp', namespace_id: '9a274707_8ab4_41d8_8f22_69f506d4ffd9' }
      }
      axios(options)
        .then((response) => {
          //
          resolve(response.data)
        })
        .catch((error) => {
          reject(error.response.data)
        })
    })
  }

  // create a request method upload media
  public readonly uploadFile = async (data?: any): Promise<any> => {
    const Form = new FormData()
    Form.append('file', createReadStream(data.data.file))
    Form.append('messaging_product', 'WHATSAPP')

    return await new Promise((resolve, reject) => {
      const options = {
        url: `https://graph.facebook.com/${this.apiVersion}/${this.PHONE_NUMBER_ID}/media`,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.token}`
        },
        data: Form
      }

      axios(options)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // create a request method to get media url
  public readonly getMediaUrl = async (mediaId: string, method?: string): Promise<any> => {
    return await new Promise((resolve, reject) => {
      const options = {
        url: `https://graph.facebook.com/${this.apiVersion}/${mediaId}`,
        method: (method != null) ? method : 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      }
      axios(options)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  // create a request method to delete media
  public readonly deleteMedia = async (mediaId: string, method?: string): Promise<any> => {
    return await this.getMediaUrl(mediaId, 'DELETE')
  }

  // create a request method to download media
  public readonly downloadMedia = async (mediaUrl: string, path?: PathLike, cb?: Function): Promise<any> => {
    // if there is no callback and no path, return a promise
    if ((cb == null) && (path == null)) {
      throw new Error('You must provide a callback or a path')
    }

    const writer = path != null ? createWriteStream(path) : null

    return await axios({
      method: 'get',
      url: mediaUrl,
      responseType: 'stream'
    }).then(async response => {
    // ensure that the user can call `then()` only when the file has
      // been downloaded entirely.

      return await new Promise((resolve, reject) => {
      // if there is a path, write the file to the path
        if (path != null) {
          response.data.pipe(writer)
        }

        // if there is a callback, call it
        if (cb != null) {
          response.data.pipe(cb)
        }
        let error: Error | null = null
        writer?.on('error', err => {
          error = err
          writer.close()
          reject(err)
        })
        writer?.on('close', () => {
          if (error == null) {
            resolve(true)
          }
        // no need to call the reject here, as it will have been called in the
        // 'error' stream;
        })
      })
    })
  }
}

export default GraphClient
