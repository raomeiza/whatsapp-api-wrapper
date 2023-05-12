import FormData = require("form-data")
import { request } from "https"
import { ConstructorOptions, GraphClient } from "../../typings"

class graphClient {
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion: string
  constructor (options:ConstructorOptions) {
    this.token = options.token
    this.WABA_ID = options.WABA_ID
    this.PHONE_NUMBER_ID = options.PHONE_NUMBER_ID
    this.apiVersion = (options.apiVersion != null) ? options.apiVersion : 'v14.0'
  }
}

class graphClients = async (method = 'POST', path = 'messages', data?) => {
    return await new Promise((resolve, reject) => {
      const options: any = {
        hostname: 'graph.facebook.com',
        port: 443,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        path: `/${this.apiVersion}/${this.PHONE_NUMBER_ID}/${path}`,
        method
      }
      // @ts-expect-error
      if (mediaDef[data?.type] !== undefined && (Boolean((data?.data?.file)))) {
        const form = new FormData()
        form.append('messaging_produnct', 'whatsapp')
        // @ts-expect-error
        form.append('file', createReadStream(data.data.file))
        options.headers = { ...form.getHeaders(), Authorization: `Bearer ${this.token}` }
        console.log(options)
        let body = ''
        const req = request(options, (res) => {
          res.on('data', (d: string) => {
            body += d
          }).on('end', () => {
            console.log('body', body)
            resolve(body)
          }).on('error', (e) => {
            reject(e)
          })
        })
        form.pipe(req)
      } else {
        options.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
        const req = request(options, (res) => {
          let body = ''
          res.on('data', (d: string) => {
            body += d
          }).on('end', () => {
            resolve(body)
          }).on('error', (e) => {
            reject(e)
          })
        })
        if (data != null) {
          req.write(JSON.stringify({ ...data, messaging_produnct: 'whatsapp' }))
        }
        req.end()
      }
    })
  }
