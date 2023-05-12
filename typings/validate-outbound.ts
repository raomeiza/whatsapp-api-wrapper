import { Configure, GenericTypeGuard, GenericValidator } from 'runtime-typescript-checker';
import { ConstrucorOptions, SendImageParams, SendTextParams, SendVideoParams, SendAudioParams, SendLocationParams, SendContactParams, SendStickerParams, SendTemplateParams, SendProductParams, SendProductListParams } from './outbound';

// ** THIS FILE IS AUTOGENERATED; DO NOT CHANGE.

export { Configure };

export function ValidateConstrucorOptions(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("ConstrucorOptions", iCandidate);
}

export function IsConstrucorOptions(iCandidate: unknown): iCandidate is ConstrucorOptions {
   return GenericTypeGuard("ConstrucorOptions", iCandidate);
}

export function ValidateSendImageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendImageParams", iCandidate);
}

export function IsSendImageParams(iCandidate: unknown): iCandidate is SendImageParams {
   return GenericTypeGuard("SendImageParams", iCandidate);
}

export function ValidateSendTextParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendTextParams", iCandidate);
}

export function IsSendTextParams(iCandidate: unknown): iCandidate is SendTextParams {
   return GenericTypeGuard("SendTextParams", iCandidate);
}

export function ValidateSendVideoParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendVideoParams", iCandidate);
}

export function IsSendVideoParams(iCandidate: unknown): iCandidate is SendVideoParams {
   return GenericTypeGuard("SendVideoParams", iCandidate);
}

export function ValidateSendAudioParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendAudioParams", iCandidate);
}

export function IsSendAudioParams(iCandidate: unknown): iCandidate is SendAudioParams {
   return GenericTypeGuard("SendAudioParams", iCandidate);
}

export function ValidateSendLocationParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendLocationParams", iCandidate);
}

export function IsSendLocationParams(iCandidate: unknown): iCandidate is SendLocationParams {
   return GenericTypeGuard("SendLocationParams", iCandidate);
}

export function ValidateSendContactParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendContactParams", iCandidate);
}

export function IsSendContactParams(iCandidate: unknown): iCandidate is SendContactParams {
   return GenericTypeGuard("SendContactParams", iCandidate);
}

export function ValidateSendStickerParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendStickerParams", iCandidate);
}

export function IsSendStickerParams(iCandidate: unknown): iCandidate is SendStickerParams {
   return GenericTypeGuard("SendStickerParams", iCandidate);
}

export function ValidateSendTemplateParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendTemplateParams", iCandidate);
}

export function IsSendTemplateParams(iCandidate: unknown): iCandidate is SendTemplateParams {
   return GenericTypeGuard("SendTemplateParams", iCandidate);
}

export function ValidateSendProductParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendProductParams", iCandidate);
}

export function IsSendProductParams(iCandidate: unknown): iCandidate is SendProductParams {
   return GenericTypeGuard("SendProductParams", iCandidate);
}

export function ValidateSendProductListParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendProductListParams", iCandidate);
}

export function IsSendProductListParams(iCandidate: unknown): iCandidate is SendProductListParams {
   return GenericTypeGuard("SendProductListParams", iCandidate);
}
