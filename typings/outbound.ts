import {
  ConstructorOptions as ConstructorOption,
  SendImageParams as SendImageParam,
  SendTextParams as SendTextParam,
  SendVideoParams as SendVideoParam,
  SendAudioParams as SendAudioParam,
  SendLocationParams as SendLocationParam,
  SendContactParams as SendContactParam,
  SendStickerParams as SendStickerParam,
  SendTemplateParams as SendTemplateParam,
  SendProductParams as SendProductParam,
  SendProductListParams as SendProductListParam
} from './'

export interface ConstrucorOptions extends ConstructorOption {}

export interface SendImageParams extends SendImageParam {}

export interface SendTextParams extends SendTextParam {}

export interface SendVideoParams extends SendVideoParam {}

export interface SendAudioParams extends SendAudioParam {}

export interface SendLocationParams extends SendLocationParam {}

export interface SendContactParams extends SendContactParam {}

export interface SendStickerParams extends SendStickerParam {}

export interface SendTemplateParams extends SendTemplateParam {}

export interface SendProductParams extends SendProductParam {}

export interface SendProductListParams extends SendProductListParam {}
