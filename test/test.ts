import OutBound from '../src/main'

import { FACEBOOK_TOKEN, FACEBOOK_APP_ID, WHATSAPP_QUESTIONIA_PHONE_ID, WHATSAPP_QUESTIONIA_APP_ID } from './config'
import { ConstructorOptions } from '../typings'
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const options = {
  token: FACEBOOK_TOKEN,
  WABA_ID: FACEBOOK_APP_ID,
  PHONE_NUMBER_ID: WHATSAPP_QUESTIONIA_PHONE_ID,
  appId: WHATSAPP_QUESTIONIA_APP_ID,
  apiVersion: 'v15.0'
}

// if options does'not match constructor options, throw an error
// i can't be writing if else for typescript when the constructor already
// have a built in type guard
const outbound = new OutBound(options as ConstructorOptions)

outbound.sendBulk({
  recipients: ['2347044124767', '2347047999878', '2347033393660'],
  type: 'text',
  text: {
    to: '2347044124767',
    type: 'text',
    recipient_type: 'individual',
    text: {
      body: 'Hello World'
    }
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

outbound.sendText({
  to: '2347044124767',
  type: 'text',
  recipient_type: 'individual',
  text: {
    body: 'Hello World'
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
