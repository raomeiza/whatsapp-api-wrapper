import {
  ConstructorOptions,
  SendImageParams,
  SendTextParams,
  SendVideoParams,
  SendAudioParams,
  SendLocationParams,
  SendContactParams,
  SendStickerParams,
  SendTemplateParams,
  SendProductParams,
  SendProductListParams
} from './'

export interface ConstrucorOption extends ConstructorOptions {}

export interface SendImageParam extends SendImageParams {}

export interface SendTextParam extends SendTextParams {}

export interface SendVideoParam extends SendVideoParams {}

export interface SendAudioParam extends SendAudioParams {}

export interface SendLocationParam extends SendLocationParams {}

export interface SendContactParam extends SendContactParams {}

export interface SendStickerParam extends SendStickerParams {}

export interface SendTemplateParam extends SendTemplateParams {}

export interface SendProductParam extends SendProductParams {}

export interface SendProductListParam extends SendProductListParams {}
