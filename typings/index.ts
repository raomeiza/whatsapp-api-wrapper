import { PathLike } from 'fs'

// declaration file for whatsapp-api-wrapper
interface MessageOptions {
  message_id: string
}

export interface ConstructorOptions {
  token: string
  WABA_ID: string
  PHONE_NUMBER_ID: string
  apiVersion?: string
}

export interface GraphClientDataParams {
  data?: SendTextParams |
  SendContactParams |
  SendLocationParams |
  SendTemplateParams |
  UploadFileParams |
  SendAudioParams |
  SendVideoParams |
  SendStickerParams |
  SendDocumentParams |
  SendImageParams |
  SendVoiceParams |
  SendButtonsParams |
  SendListParams |
  SendProductParams |
  SendProductListParams |
  SendReadParams
}

export type GraphClient = (method: string, path: string, data?: GraphClientDataParams) => Promise<any>
interface UploadFileParams {
  to: string // this is just here religiously. it is not used
  type: 'file'
  file: PathLike
}

export interface MediaParams {
  caption?: string
  filename?: string
  id?: string
  metadata?: object
  mime_type?: string
  sha256?: string
  link?: string
  path?: PathLike
  size?: number
}

interface SendDataParams {
  type: 'text' | 'image' | 'voice' | 'audio' | 'video' | 'document' | 'location' | 'contact' | 'sticker' | 'template' | 'list' | 'buttons' | 'product' | 'productList' | 'file' | 'read'
  recipient_type: 'individual'
  to: string
  messageOptions?: MessageOptions
}

export interface SendReadParams extends SendDataParams {
  type: 'read'
}
export interface SendTextParams extends SendDataParams {
  type: 'text'
  text: {
    body: string
  }
  file?: PathLike
}

export interface SendImageParams extends SendDataParams {
  type: 'image'
  image: MediaParams
  mime_type?: 'image/jpeg' | 'image/png'
}

export interface SendAudioParams extends SendDataParams {
  type: 'audio'
  audio: MediaParams
  mime_type?: 'audio/mpeg' | 'audio/mp4' | 'audio/ogg' | 'audio/opus' | 'audio/aac' | 'audio/amr'
}

export interface SendVideoParams extends SendDataParams {
  type: 'video'
  video: MediaParams
  mime_type?: 'video/mp4' | 'video/3gpp'
}

export interface SendVoiceParams extends SendDataParams {
  type: 'voice'
  voice: MediaParams
  mime_type?: 'audio/ogg; codecs=opus' | 'audio/ogg; codecs=vorbis' | 'audio/mpeg' | 'audio/mp4' | 'audio/amr' | 'audio/wav'
}

export interface SendDocumentParams extends SendDataParams {
  type: 'document'
  document: MediaParams
  mime_type?: 'text/plain' |
  'application/pdf' |
  'application/vnd.ms-powerpoint' |
  'application/msword' |
  'application/vnd.ms-excel' |
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document' |
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' |
  'application/vnd.openxmlformats-officedocument.presentationml.presentation'
}

export interface SendStickerParams extends SendDataParams {
  type: 'sticker'
  sticker: MediaParams
  mime_type?: 'image/webp'
}

export interface SendLocationParams extends SendDataParams {
  type: 'location'
  location: LocationParams
}

export interface SendContactParams extends SendDataParams {
  type: 'contact'
  contact: ContactParams
}

export interface SendTemplateParams extends SendDataParams {
  type: 'template'
  template: Template
}

export interface SendListParams extends SendDataParams {
  type: 'list'
  list: ListMessageParams
}

export interface SendButtonsParams extends SendDataParams {
  type: 'buttons'
  buttons: ButtonParams
}

export interface SendProductParams extends SendDataParams {
  type: 'product'
  product: SingleProductMessageParams
}

export interface SendProductListParams extends SendDataParams {
  type: 'productList'
  productList: MultipleProductMessageParams
}

export interface SendBulkParams {
  type: 'text' | 'image' | 'voice' | 'audio' | 'video' | 'document' | 'location' | 'contact' | 'sticker' | 'template' | 'list' | 'buttons' | 'product' | 'productList' | 'file' | 'read'
  recipients: string[]
  image?: SendImageParams
  text?: SendTextParams
  video?: SendVideoParams
  audio?: SendAudioParams
  location?: SendLocationParams
  contact?: SendContactParams
  sticker?: SendStickerParams
  template?: SendTemplateParams
  product?: SendProductParams
  productList?: SendProductListParams
  file?: UploadFileParams
  read?: SendReadParams
}

// for helper functions

export type DownloadFile = (url: string, filename: string, options?: object) => Promise<void>

// message componnents

interface Address {
  city?: string
  country?: string
  countryCode?: string
  state?: string
  street?: string
  zip?: string
}

// address is an array of address objects
interface Addresses {
  addresses: Address[]
}

interface Name {
  first_name?: string
  formatted_name?: string
  last_name?: string
  middle_name?: string
  prefix?: string
  suffix?: string
}

interface Org {
  company?: string
  department?: string
  title?: string
}

interface Phone {
  phone?: string
  type?: string
  wa_id?: string
}

interface Url {
  url: string
  type?: string
}

interface Email {
  email: string
  type?: string
}

interface ContactParams {
  name: Name
  addresses?: Addresses
  birthday?: string
  emails?: Email[]
  ims?: Array<{ service: string, user_id: string }>
  org?: Org
  phones?: Phone[]
  urls?: Url[]
}

interface LocationParams {
  latitude: number
  longitude: number
  name?: string
  address?: string
}

interface HeaderParams {
  type: 'header'
  parameters: [
    {
      type: 'text'
      text: string
    } | {
      type: 'image'
      image: MediaParams
    } | {
      type: 'video'
      video: MediaParams
    } | {
      type: 'document'
      document: MediaParams
    },
  ]
}

interface BodyParams {
  type: 'body'
  parameters: [
    {
      type: 'text'
      text: string
    } | {
      type: 'date_time'
      date_time: DateTimeParams
    } | {
      type: 'currency'
      currency: CurrencyParams
    }
  ]
}

interface ActionsParams {
  button?: string // required for list message
  buttons: [
    {
      type: 'reply' | 'url' | 'phone_number' | 'location'
      reply?: {
        id: string
        title: string
      }
      url?: {
        id: string
        title: string
        url: string
      }
      phone_number?: {
        id: string
        title: string
        phone_number: string
      }
      location?: {
        id: string
        title: string
      }
    },
  ]
}

export interface OutBoundResultParams {
  meta: {
    status: number
    message: string
  }
  messages: [
    {
      id: string
    }
  ]
  errors: [
    {
      code: number
      message: string
    }
  ]
}

interface CurrencyParams {
  fallback_value: string
  code: string
  amount_1000: string
}

interface DateTimeParams {
  fallback_value: string
  day_of_month: number
  day_of_week: number
  hour: number
  minute: number
  month: number
  year: number
  timestamp: number
}

interface ButtonParams {
  type: 'button'
  sub_type: 'url' | 'quick_reply' | 'phone_number' | 'location'
  index: number
  parameters: [
    {
      type: 'text' | 'payload'
      text: string
      payload?: string
    }
  ]
}

export interface Template {
  name: string
  language: {
    policy: 'deterministic' | 'fallback'
    code: string
  }
  namespace: string
  components: [
    HeaderParams,
    BodyParams,
    ButtonParams,
  ]
}

interface interactiveMessageParams {
  type: 'list' | 'button' | 'product' | 'product_list'
  header?: HeaderParams // not required for single product
  body?: BodyParams // optional for product and required for product_list
  footer?: {
    text: string // accepts links, markdown emojis, and max length is 60 characters
  }
  actions: ActionsParams[]
  sections?: InteractiveListSection[] /* required for list message */ | InteractiveProductListSection[] /* required for product_list message */
  catalog_id?: string // required for single product message
  product_retailer_id?: string // required for single and multiple product message
}

export interface ListMessageParams extends interactiveMessageParams {
  type: 'list'
}

export interface ButtonMessageParams extends interactiveMessageParams {
  type: 'button'
  actions: [
    {
      button: string
      buttons: [
        {
          type: 'reply' | 'url' | 'phone_number' | 'location'
          reply?: {
            id: string
            title: string
          }
          url?: {
            id: string
            title: string
            url: string
          }
          phone_number?: {
            id: string
            title: string
            phone_number: string
          }
          location?: {
            id: string
            title: string
          }
        },
      ]
    },
  ]
}

export interface SingleProductMessageParams extends interactiveMessageParams {
  type: 'product'
  catalog_id: string
  product_retailer_id: string
}

export interface MultipleProductMessageParams extends interactiveMessageParams {
  type: 'product_list'
  sections: InteractiveProductListSection[]
  product_retailer_id: string
}

interface InteractiveListSection {
  title: string
  rows: InteractiveListRow[]
}

interface InteractiveListRow {
  title: string
  ID: string
  description?: string
}

interface InteractiveProductListSection {
  product_retailer_id: string
}

// chat actions
export type MarkAsRead = (chatId: string) => Promise<boolean>

// methods for sending messages start here

/**
 * Send a text message to a chat
 * @param chatId The chat id
 * @param text The text to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/text
 **/
export type SendText = (data: SendTextParams) => Promise<any>

/**
 * @param chatId The chat id
 * @param mediaUrl options.url The url of the media to send
 * @param mediaId options.id The id of the media to send
 * @file_path options.path The path of the media to send
 * @param caption options.caption The caption of the media to send
 * @param mimeType options.mime_type The mime type of the media to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/media
 * */

export type SendImage = (data: SendImageParams) => Promise<any>

/**
 * @param chatId The chat id
 * @param mediaUrl options.url The url of the media to send
 * @param mediaId options.id The id of the media to send
 * @file_path options.path The path of the media to send
 * @param caption options.caption The caption of the media to send
 * @param mimeType options.mime_type The mime type of the media to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/media
 * */
export type SendVideo = (data: SendImageParams) => Promise<any>

/**
 * @param chatId The chat id
 * @param mediaUrl options.url The url of the media to send
 * @param mediaId options.id The id of the media to send
 * @file_path options.path The path of the media to send
 * @param caption options.caption The caption of the media to send
 * @param mimeType options.mime_type The mime type of the media to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/media
 * */
export type SendAudio = (data: SendAudioParams) => Promise<any>

/**
 * @param chatId The chat id
 * @param mediaUrl options.url The url of the media to send
 * @param mediaId options.id The id of the media to send
 * @file_path options.path The path of the media to send
 * @param caption options.caption The caption of the media to send
 * @param mimeType options.mime_type The mime type of the media to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/media
 * */
export type SendVoice = (data: SendVoiceParams) => Promise<any>

/**
 * @param chatId The chat id
 * @param mediaUrl options.url The url of the media to send
 * @param mediaId options.id The id of the media to send
 * @file_path options.path The path of the media to send
 * @param caption options.caption The caption of the media to send
 * @param mimeType options.mime_type The mime type of the media to send
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/media
 * */
export type SendDocument = (data: SendDocumentParams) => Promise<any>

/**
 * @param {string} chatId The chat id
 * @param {BodyParams} body The body of the template
 * @param {HeaderParams} header The header of the template
 * @param {object} The footer of the template
 * @param {ActionsParams[]} actions The action buttons of the template
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/templates
 * */
export type SendButtons = (data: SendButtonsParams) => Promise<{} | Error>

/**
 * @param chatId The chat id
 * @param body The body of the template
 * @param header The header of the template
 * @param footer The footer of the template
 * @param {object} action Optional parameters
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/templates
 * */
export type SendList = (data: SendListParams) => Promise<{} | Error>

export type SendCarousel = (to: string, carousel: BodyParams, messageOption?: MessageOptions) => Promise<{} | Error>

/**
 * @param {string} chatId The chat id
 * @param {object} body The body of the template
 * @param {HeaderParams} header The header of the template
 * @param {object} footer The footer of the template
 * @param options Optional parameters
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/templates
 * */
export type SendOrder = (to: string, order: BodyParams, messageOption?: MessageOptions) => Promise<{} | Error>

/**
 * @param {string} chatId The chat id
 * @param {string} longitude The longitude of the location
 * @param {string} latitude The latitude of the location
 * @param {string} name The name of the location
 * @param  {string} address  address The address of the location
 * @returns Promise<boolean>
 * @see https://developers.facebook.com/docs/whatsapp/api/messages/location
 * */
export type SendLocation = (data: SendLocationParams) => Promise<{} | Error>

export type SendContact = (data: SendContactParams) => Promise<{} | Error>

export type SendSticker = (data: SendStickerParams) => Promise<{} | Error>

export type SendRead = (data: SendReadParams) => Promise<{} | Error>

export type SendPaused = (to: string) => Promise<{} | Error>

export type SendResumed = (to: string) => Promise<{} | Error>

export type SendSingleProduct = (data: SendProductParams) => Promise<{} | Error>

export type SendProductList = (data: SendProductListParams) => Promise<{} | Error>
export type SendBulk = (data: SendBulkParams) => Promise<{} | Error>

// methods for sending messages end here

// web hooks
// inbound reply parameters

interface OrderReplyParams {
  catalog_id: string
  text: string
  product_items: [
    {
      product_retailer_id: string
      quantity: number
      item_price: number
      currency: string
    },
  ]
}

interface ButtonReplyParams {
  id: string
  title: string
}

interface ListReplyParams extends interactiveMessageParams { description: string }

interface BasicStatusesParams {
  id: string // the id of the message
  recipient_id: string // same as 'from' in the message
  status: 'delivered' | 'read' | 'sent' | 'failed' | 'deleted' | 'warning'
  timestamp: number
  type: 'message' | 'ephemeral'
  conversation: {
    id: string
    origin: {
      type: 'business_initiated' | 'customer_initiated' | 'referral_conversation'
    }
    expiration_timestamp: number
  }
}

interface StatusesParams extends BasicStatusesParams {
  pricing: {
    pricing_model: 'CBP' // currently only CBP is supported
    category: 'business_initiated' | 'customer_initiated' | 'referral_conversation'
    billable: boolean
  }
}

export interface InboundParams {
  messaging_product: 'whatsapp'
  metadata: {
    display_phone_number: string
    phone_number_id: number
  }
  errors: [
    {
      code: string
      title: string
      detail: string
      href: string
    },
  ]
  messages: {
    contacts: [
      {
        wa_id: string
        profile: {
          name: string
        }
      },
    ]
    messages: [
      {
        audio: MediaParams
        button: {
          payload: string
          text: string
        }
        context: {
          forwarded: boolean
          frequently_forwarded: boolean // true if the message has been forwarded more than 5 times
          from: string
          id: string
          referred_product: {
            catalog_id: string
            product_retailer_id: string
          }
        }
        video: MediaParams
        voice: MediaParams
        sticker: MediaParams
        image: MediaParams
        document: MediaParams
        from: string
        id: string
        identity: { // present if a customer's phone number or profile has been updated
          acknowledged: boolean
          created_timestamp: number
          hash: string
        }
        interactive: {
          type: 'list_reply' | 'button_reply'
          button_reply?: ListReplyParams
          list_reply?: ButtonReplyParams
        }
        order: OrderReplyParams
        referral: RefferalParams
        system: { // when a customer changes their phone number or profile
          type: 'customer_identity_changed' | 'customer_changed_number'
          new_wa_id: string // present if type is customer_changed_number
          wa_id: string // present if type is customer_identity_changed
          customer: string // the customer's old id if type is customer_changed_number
        }
        text: {
          body: string
        }
        timestamp: number // time the whatsapp server received the message from the customer
        type: 'audio' |
        'button' |
        'document' |
        'image' |
        'interactive' |
        'order' |
        'referral' |
        'sticker' |
        'system' |
        'text' |
        'video' |
        'unknown' |
        'location' |
        'voice' |
        'contacts' |
        'ephemeral'
        location: {
          latitude: number
          longitude: number
          name: string
          address: string
          url: string
        }
        contacts: ContactParams[]
        referred_product: RefferedProductParams
        wa_id: string
      },
    ]
    recipint_id: string
  }
  statuses: StatusesParams

}

interface RefferalParams {
  source_url: string
  source_type: 'ad' | 'post'
  source_id: string
  headline: string
  body: string
  media_type: 'image' | 'video'
  thumbnail_url: string
  image: MediaParams
  video: MediaParams
}

interface RefferedProductParams {
  catalog_id: string
  product_retailer_id: string
}

// getting account info
interface BusinessProfile {
  about?: string
  address?: string // max of 256 characters
  description?: string // max of 512 characters
  email?: string
  messaging_product?: 'whatsapp'
  profile_picture_url?: string
  vertical?: 'UNDEFINED' | // a list or one of the following
  'OTHER' |
  'AUTO' |
  'BEAUTY' |
  'APPAREL' |
  'EDU' |
  'ENTERTAINMENT' |
  'EVENT_PLAN' |
  'FINANCE' |
  'GROCERY' |
  'GOVT' |
  'HOTEL' |
  'HEALTH' |
  'NONPROFIT' |
  'PROF_SERVICES' |
  'RETAIL' |
  'TRAVEL' |
  'RESTAURANT' |
  'NOT_A_BIZ'
  website?: string[]
}

export type GetProfile = (fields: BusinessProfile,
  business_id: string // defaults to the phone id provided in the constructor
) => Promise<BusinessProfile | Error>

export type UpdateProfile = (fields: BusinessProfile,
  business_id: string // defaults to the phone id provided in the constructor
) => Promise<BusinessProfile | Error>

export type RequestPhoneVerification = (phone_number_id: number) => Promise<{} | Error>

export type VerifyPhone = (phone_number_id: number, code: string) => Promise<{} | Error>

export type GetPhoneNumbers = (phone_number_id: number) => Promise<{
  data: [
    Array<{
      id: string
      display_phone_number: string
      verified_name: string
      quality_rating: string
    }>,
  ]
} | Error>

export type GetPhoneNumbersByFilter = (filters: {
  field: 'account_mode'
  operator: 'EQUAL'
  value: 'SANDBOX' | 'LIVE'
} | {
  field: 'status'
  operator: 'EQUAL'
  value: 'ACTIVE' | 'INACTIVE' | 'UNVERIFIED'
} | {
  field: 'phone_number'
  operator: 'EQUAL'
  value: string
}) => Promise<{
  data: [
    Array<{
      id: string
      display_phone_number: string
      verified_name: string
      quality_rating: string
      [x: string]: any // index signature for future fields
    }>,
  ]
} | Error>

export type GetDisplayStatus = (phone_number_id: number) => Promise<{
  name_status: 'APPROVED' | 'AVAILABLE_WITHOUT_REVIEW' | 'PENDING_REVIEW' | 'DECLINED' | 'EXPIRED' | 'NONE'
} | Error>

export type AddPhoneNumber = (contry_code: string, phone_number: string, migrate_phone?: boolean) => Promise<{
  id: string
} | Error>

export type getPhoneCertificate = (phone_number_id: number) => Promise<{
  new_certificate?: string
  certificate?: string
} | Error>

export type getPhoneOtpStatus = (phone_number_id: number) => Promise<{
  'code_verification_status': 'VERIFIED' | 'NOT_VERIFIED'
} | Error>

// managing media

export type uploadMedia = (file: string | Buffer, type: 'image' | 'audio' | 'video' | 'document') => Promise<{ id: string } | Error>

export type GetMediaUrl = (mediaId: string) => Promise<{ url: string } | Error>

export type DeleteMedia = (mediaId: string) => Promise<{} | Error>

interface DownloadMedia extends GetMediaUrl {
  (mediaId: string, path: string): Promise<{ path: string } | Error>
}

// interface for sending messages

// declare events to be emitted on messages received
interface IncomingBasicParams {
  context: {
    id: string
    from: string
    referred_product?: RefferedProductParams
  }
  from: {
    id: string
    name: string
    [x: string]: any // index signature for future fields
  }
  contacts: [
    {
      wa_id: string
      profile: {
        name: string
      }
    },
  ]
}

interface IncomingTextParams extends IncomingBasicParams {
  type: 'text'
  message: {
    id: string
    timestamp: number
    text: string
  }
}

interface IncomingImageParams extends IncomingBasicParams {
  type: 'image'
  message: { id: string }
}

interface IncomingAudioParams extends IncomingBasicParams {
  type: 'audio'
  message: { id: string }
}

interface IncomingVideoParams extends IncomingBasicParams {
  type: 'video'
  message: { id: string }
}

interface IncomingDocumentParams extends IncomingBasicParams {
  type: 'document'
  message: { id: string }
}

interface IncomingButtonsParams extends IncomingBasicParams {
  type: 'buttons_reply'
  message: ButtonReplyParams
}

interface IncomingListParams extends IncomingBasicParams {
  type: 'list_reply'
  message: ListReplyParams
}

interface IncomingOrderParams extends IncomingBasicParams {
  type: 'order_reply'
  message: OrderReplyParams
}

interface IncomingLocationParams extends IncomingBasicParams {
  type: 'location'
  message: LocationParams
}

interface IncomingContactParams extends IncomingBasicParams {
  type: 'contact'
  message: ContactParams
}

interface IncomingStickerParams extends IncomingBasicParams {
  type: 'sticker'
  message: { id: string }
}

interface IncomingSingleProductParams extends IncomingBasicParams {
  type: 'single_product'
  message: OrderReplyParams
}

interface IncomingMultipleProductsParams extends IncomingBasicParams {
  type: 'multiple_products'
  message: OrderReplyParams
}

declare class MessageEvents {
  constructor (options: ConstructorOptions)
  public on (event: 'text', listener: (data: IncomingTextParams) => void): this
  public on (event: 'image', listener: (data: IncomingImageParams) => void): this
  public on (event: 'audio', listener: (data: IncomingAudioParams) => void): this
  public on (event: 'video', listener: (data: IncomingVideoParams) => void): this
  public on (event: 'document', listener: (data: IncomingDocumentParams) => void): this
  public on (event: 'buttons_reply', listener: (data: IncomingButtonsParams) => void): this
  public on (event: 'voice', listener: (data: IncomingAudioParams) => void): this
  public on (event: 'list_reply', listener: (data: IncomingListParams) => void): this
  public on (event: 'order_reply', listener: (data: IncomingOrderParams) => void): this
  public on (event: 'location', listener: (data: IncomingLocationParams) => void): this
  public on (event: 'contact', listener: (data: IncomingContactParams) => void): this
  public on (event: 'sticker', listener: (data: IncomingStickerParams) => void): this
  public on (event: 'single_product', listener: (data: IncomingSingleProductParams) => void): this
  public on (event: 'multiple_products', listener: (data: IncomingMultipleProductsParams) => void): this
  public on (event: 'error', listener: (data: Error) => void): this
  // message status events
  public on (event: 'messageRead', listener: (data: BasicStatusesParams) => void): this
  public on (event: 'messageWarning', listener: (data: BasicStatusesParams) => void): this
  public on (event: 'messageSent', listener: (data: BasicStatusesParams) => void): this
  public on (event: 'messageDeleted', listener: (data: BasicStatusesParams) => void): this
  public on (event: 'messageDelivered', listener: (data: BasicStatusesParams) => void): this
  public on (event: 'messageFailed', listener: (data: BasicStatusesParams) => void): this
}

export declare class OutBound {
  constructor (options: ConstructorOptions)
  public graphClient: GraphClient
  public sendText: SendText
  public sendImage: SendImage
  public sendAudio: SendAudio
  public sendVideo: SendVideo
  public sendDocument: SendDocument
  public sendButtons: SendButtons
  public sendList: SendList
  // public sendCarousel: SendCarousel
  // public sendOrder: SendOrder
  public sendLocation: SendLocation
  public sendContact: SendContact
  public sendSticker: SendSticker
  public sendRead: SendRead
  // public sendPaused: SendPaused
  // public sendResumed: SendResumed
  public sendSingleProduct: SendSingleProduct
  public sendProductList: SendProductList
  public sendBulk: SendBulk
}

export declare class Account {
  constructor (options: ConstructorOptions)
  public getProfile: GetProfile
  public updateProfile: UpdateProfile
  public requestPhoneVerification: RequestPhoneVerification
  public verifyPhone: VerifyPhone
  public getPhoneNumbers: GetPhoneNumbers
  public getPhoneNumbersByFilter: GetPhoneNumbersByFilter
  public getDisplayStatus: GetDisplayStatus
  public addPhoneNumber: AddPhoneNumber
  public getPhoneCertificate: getPhoneCertificate
  public getPhoneOtpStatus: getPhoneOtpStatus
}

export declare class Media {
  constructor (options: ConstructorOptions)
  public uploadMedia: uploadMedia
  public getMediaUrl: GetMediaUrl
  public deleteMedia: DeleteMedia
  public downloadMedia: DownloadMedia
}

export declare class WhatsappApiWrapper {
  constructor (options: ConstructorOptions)
  public messageEvents: MessageEvents
  public outBound: OutBound
  public account: Account
  public media: Media
}
// declare events to be emitted on account updates
// declare class AccountEvents {
//   constructor(options: ConstructorOptions);
//   public on(event: 'account_status', listener: (message: AccountStatus) => void): this;
// }
