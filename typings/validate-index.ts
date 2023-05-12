import { Configure, GenericTypeGuard, GenericValidator } from 'runtime-typescript-checker';
import { BusinessProfile, ConstructorOptions, GraphClientDataParams, GraphClient, MediaParams, SendReadParams, SendTextParams, SendImageParams, SendAudioParams, SendVideoParams, SendVoiceParams, SendDocumentParams, SendStickerParams, SendLocationParams, SendContactParams, SendTemplateParams, SendListParams, SendButtonsParams, SendProductParams, SendProductListParams, SendBulkParams, DownloadFile, OutBoundResultParams, Template, ListMessageParams, ButtonMessageParams, SingleProductMessageParams, MultipleProductMessageParams, MarkAsRead, SendText, SendImage, SendVideo, SendAudio, SendVoice, SendDocument, SendButtons, SendList, SendCarousel, SendOrder, SendLocation, SendContact, SendSticker, SendRead, SendPaused, SendResumed, SendSingleProduct, SendProductList, sendTemplate, SendBulk, UploadFile, InboundParams, GetProfile, UpdateProfile, RequestPhoneVerification, VerifyPhone, GetPhoneNumbers, GetPhoneNumbersByFilter, GetDisplayStatus, AddPhoneNumber, getPhoneCertificate, getPhoneOtpStatus, uploadMedia, GetMediaUrl, DeleteMedia, MessageEvents, OutBound, Account, Media, WhatsappApiWrapper } from './index';

// ** THIS FILE IS AUTOGENERATED; DO NOT CHANGE.

export { Configure };

export function ValidateBusinessProfile(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("BusinessProfile", iCandidate);
}

export function IsBusinessProfile(iCandidate: unknown): iCandidate is BusinessProfile {
   return GenericTypeGuard("BusinessProfile", iCandidate);
}

export function ValidateConstructorOptions(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("ConstructorOptions", iCandidate);
}

export function IsConstructorOptions(iCandidate: unknown): iCandidate is ConstructorOptions {
   return GenericTypeGuard("ConstructorOptions", iCandidate);
}

export function ValidateGraphClientDataParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GraphClientDataParams", iCandidate);
}

export function IsGraphClientDataParams(iCandidate: unknown): iCandidate is GraphClientDataParams {
   return GenericTypeGuard("GraphClientDataParams", iCandidate);
}

export function ValidateGraphClient(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GraphClient", iCandidate);
}

export function IsGraphClient(iCandidate: unknown): iCandidate is GraphClient {
   return GenericTypeGuard("GraphClient", iCandidate);
}

export function ValidateMediaParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("MediaParams", iCandidate);
}

export function IsMediaParams(iCandidate: unknown): iCandidate is MediaParams {
   return GenericTypeGuard("MediaParams", iCandidate);
}

export function ValidateSendReadParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendReadParams", iCandidate);
}

export function IsSendReadParams(iCandidate: unknown): iCandidate is SendReadParams {
   return GenericTypeGuard("SendReadParams", iCandidate);
}

export function ValidateSendTextParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendTextParams", iCandidate);
}

export function IsSendTextParams(iCandidate: unknown): iCandidate is SendTextParams {
   return GenericTypeGuard("SendTextParams", iCandidate);
}

export function ValidateSendImageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendImageParams", iCandidate);
}

export function IsSendImageParams(iCandidate: unknown): iCandidate is SendImageParams {
   return GenericTypeGuard("SendImageParams", iCandidate);
}

export function ValidateSendAudioParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendAudioParams", iCandidate);
}

export function IsSendAudioParams(iCandidate: unknown): iCandidate is SendAudioParams {
   return GenericTypeGuard("SendAudioParams", iCandidate);
}

export function ValidateSendVideoParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendVideoParams", iCandidate);
}

export function IsSendVideoParams(iCandidate: unknown): iCandidate is SendVideoParams {
   return GenericTypeGuard("SendVideoParams", iCandidate);
}

export function ValidateSendVoiceParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendVoiceParams", iCandidate);
}

export function IsSendVoiceParams(iCandidate: unknown): iCandidate is SendVoiceParams {
   return GenericTypeGuard("SendVoiceParams", iCandidate);
}

export function ValidateSendDocumentParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendDocumentParams", iCandidate);
}

export function IsSendDocumentParams(iCandidate: unknown): iCandidate is SendDocumentParams {
   return GenericTypeGuard("SendDocumentParams", iCandidate);
}

export function ValidateSendStickerParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendStickerParams", iCandidate);
}

export function IsSendStickerParams(iCandidate: unknown): iCandidate is SendStickerParams {
   return GenericTypeGuard("SendStickerParams", iCandidate);
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

export function ValidateSendTemplateParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendTemplateParams", iCandidate);
}

export function IsSendTemplateParams(iCandidate: unknown): iCandidate is SendTemplateParams {
   return GenericTypeGuard("SendTemplateParams", iCandidate);
}

export function ValidateSendListParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendListParams", iCandidate);
}

export function IsSendListParams(iCandidate: unknown): iCandidate is SendListParams {
   return GenericTypeGuard("SendListParams", iCandidate);
}

export function ValidateSendButtonsParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendButtonsParams", iCandidate);
}

export function IsSendButtonsParams(iCandidate: unknown): iCandidate is SendButtonsParams {
   return GenericTypeGuard("SendButtonsParams", iCandidate);
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

export function ValidateSendBulkParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendBulkParams", iCandidate);
}

export function IsSendBulkParams(iCandidate: unknown): iCandidate is SendBulkParams {
   return GenericTypeGuard("SendBulkParams", iCandidate);
}

export function ValidateDownloadFile(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("DownloadFile", iCandidate);
}

export function IsDownloadFile(iCandidate: unknown): iCandidate is DownloadFile {
   return GenericTypeGuard("DownloadFile", iCandidate);
}

export function ValidateOutBoundResultParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("OutBoundResultParams", iCandidate);
}

export function IsOutBoundResultParams(iCandidate: unknown): iCandidate is OutBoundResultParams {
   return GenericTypeGuard("OutBoundResultParams", iCandidate);
}

export function ValidateTemplate(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("Template", iCandidate);
}

export function IsTemplate(iCandidate: unknown): iCandidate is Template {
   return GenericTypeGuard("Template", iCandidate);
}

export function ValidateListMessageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("ListMessageParams", iCandidate);
}

export function IsListMessageParams(iCandidate: unknown): iCandidate is ListMessageParams {
   return GenericTypeGuard("ListMessageParams", iCandidate);
}

export function ValidateButtonMessageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("ButtonMessageParams", iCandidate);
}

export function IsButtonMessageParams(iCandidate: unknown): iCandidate is ButtonMessageParams {
   return GenericTypeGuard("ButtonMessageParams", iCandidate);
}

export function ValidateSingleProductMessageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SingleProductMessageParams", iCandidate);
}

export function IsSingleProductMessageParams(iCandidate: unknown): iCandidate is SingleProductMessageParams {
   return GenericTypeGuard("SingleProductMessageParams", iCandidate);
}

export function ValidateMultipleProductMessageParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("MultipleProductMessageParams", iCandidate);
}

export function IsMultipleProductMessageParams(iCandidate: unknown): iCandidate is MultipleProductMessageParams {
   return GenericTypeGuard("MultipleProductMessageParams", iCandidate);
}

export function ValidateMarkAsRead(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("MarkAsRead", iCandidate);
}

export function IsMarkAsRead(iCandidate: unknown): iCandidate is MarkAsRead {
   return GenericTypeGuard("MarkAsRead", iCandidate);
}

export function ValidateSendText(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendText", iCandidate);
}

export function IsSendText(iCandidate: unknown): iCandidate is SendText {
   return GenericTypeGuard("SendText", iCandidate);
}

export function ValidateSendImage(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendImage", iCandidate);
}

export function IsSendImage(iCandidate: unknown): iCandidate is SendImage {
   return GenericTypeGuard("SendImage", iCandidate);
}

export function ValidateSendVideo(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendVideo", iCandidate);
}

export function IsSendVideo(iCandidate: unknown): iCandidate is SendVideo {
   return GenericTypeGuard("SendVideo", iCandidate);
}

export function ValidateSendAudio(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendAudio", iCandidate);
}

export function IsSendAudio(iCandidate: unknown): iCandidate is SendAudio {
   return GenericTypeGuard("SendAudio", iCandidate);
}

export function ValidateSendVoice(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendVoice", iCandidate);
}

export function IsSendVoice(iCandidate: unknown): iCandidate is SendVoice {
   return GenericTypeGuard("SendVoice", iCandidate);
}

export function ValidateSendDocument(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendDocument", iCandidate);
}

export function IsSendDocument(iCandidate: unknown): iCandidate is SendDocument {
   return GenericTypeGuard("SendDocument", iCandidate);
}

export function ValidateSendButtons(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendButtons", iCandidate);
}

export function IsSendButtons(iCandidate: unknown): iCandidate is SendButtons {
   return GenericTypeGuard("SendButtons", iCandidate);
}

export function ValidateSendList(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendList", iCandidate);
}

export function IsSendList(iCandidate: unknown): iCandidate is SendList {
   return GenericTypeGuard("SendList", iCandidate);
}

export function ValidateSendCarousel(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendCarousel", iCandidate);
}

export function IsSendCarousel(iCandidate: unknown): iCandidate is SendCarousel {
   return GenericTypeGuard("SendCarousel", iCandidate);
}

export function ValidateSendOrder(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendOrder", iCandidate);
}

export function IsSendOrder(iCandidate: unknown): iCandidate is SendOrder {
   return GenericTypeGuard("SendOrder", iCandidate);
}

export function ValidateSendLocation(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendLocation", iCandidate);
}

export function IsSendLocation(iCandidate: unknown): iCandidate is SendLocation {
   return GenericTypeGuard("SendLocation", iCandidate);
}

export function ValidateSendContact(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendContact", iCandidate);
}

export function IsSendContact(iCandidate: unknown): iCandidate is SendContact {
   return GenericTypeGuard("SendContact", iCandidate);
}

export function ValidateSendSticker(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendSticker", iCandidate);
}

export function IsSendSticker(iCandidate: unknown): iCandidate is SendSticker {
   return GenericTypeGuard("SendSticker", iCandidate);
}

export function ValidateSendRead(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendRead", iCandidate);
}

export function IsSendRead(iCandidate: unknown): iCandidate is SendRead {
   return GenericTypeGuard("SendRead", iCandidate);
}

export function ValidateSendPaused(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendPaused", iCandidate);
}

export function IsSendPaused(iCandidate: unknown): iCandidate is SendPaused {
   return GenericTypeGuard("SendPaused", iCandidate);
}

export function ValidateSendResumed(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendResumed", iCandidate);
}

export function IsSendResumed(iCandidate: unknown): iCandidate is SendResumed {
   return GenericTypeGuard("SendResumed", iCandidate);
}

export function ValidateSendSingleProduct(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendSingleProduct", iCandidate);
}

export function IsSendSingleProduct(iCandidate: unknown): iCandidate is SendSingleProduct {
   return GenericTypeGuard("SendSingleProduct", iCandidate);
}

export function ValidateSendProductList(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendProductList", iCandidate);
}

export function IsSendProductList(iCandidate: unknown): iCandidate is SendProductList {
   return GenericTypeGuard("SendProductList", iCandidate);
}

export function ValidatesendTemplate(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("sendTemplate", iCandidate);
}

export function IssendTemplate(iCandidate: unknown): iCandidate is sendTemplate {
   return GenericTypeGuard("sendTemplate", iCandidate);
}

export function ValidateSendBulk(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("SendBulk", iCandidate);
}

export function IsSendBulk(iCandidate: unknown): iCandidate is SendBulk {
   return GenericTypeGuard("SendBulk", iCandidate);
}

export function ValidateUploadFile(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("UploadFile", iCandidate);
}

export function IsUploadFile(iCandidate: unknown): iCandidate is UploadFile {
   return GenericTypeGuard("UploadFile", iCandidate);
}

export function ValidateInboundParams(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("InboundParams", iCandidate);
}

export function IsInboundParams(iCandidate: unknown): iCandidate is InboundParams {
   return GenericTypeGuard("InboundParams", iCandidate);
}

export function ValidateGetProfile(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GetProfile", iCandidate);
}

export function IsGetProfile(iCandidate: unknown): iCandidate is GetProfile {
   return GenericTypeGuard("GetProfile", iCandidate);
}

export function ValidateUpdateProfile(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("UpdateProfile", iCandidate);
}

export function IsUpdateProfile(iCandidate: unknown): iCandidate is UpdateProfile {
   return GenericTypeGuard("UpdateProfile", iCandidate);
}

export function ValidateRequestPhoneVerification(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("RequestPhoneVerification", iCandidate);
}

export function IsRequestPhoneVerification(iCandidate: unknown): iCandidate is RequestPhoneVerification {
   return GenericTypeGuard("RequestPhoneVerification", iCandidate);
}

export function ValidateVerifyPhone(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("VerifyPhone", iCandidate);
}

export function IsVerifyPhone(iCandidate: unknown): iCandidate is VerifyPhone {
   return GenericTypeGuard("VerifyPhone", iCandidate);
}

export function ValidateGetPhoneNumbers(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GetPhoneNumbers", iCandidate);
}

export function IsGetPhoneNumbers(iCandidate: unknown): iCandidate is GetPhoneNumbers {
   return GenericTypeGuard("GetPhoneNumbers", iCandidate);
}

export function ValidateGetPhoneNumbersByFilter(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GetPhoneNumbersByFilter", iCandidate);
}

export function IsGetPhoneNumbersByFilter(iCandidate: unknown): iCandidate is GetPhoneNumbersByFilter {
   return GenericTypeGuard("GetPhoneNumbersByFilter", iCandidate);
}

export function ValidateGetDisplayStatus(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GetDisplayStatus", iCandidate);
}

export function IsGetDisplayStatus(iCandidate: unknown): iCandidate is GetDisplayStatus {
   return GenericTypeGuard("GetDisplayStatus", iCandidate);
}

export function ValidateAddPhoneNumber(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("AddPhoneNumber", iCandidate);
}

export function IsAddPhoneNumber(iCandidate: unknown): iCandidate is AddPhoneNumber {
   return GenericTypeGuard("AddPhoneNumber", iCandidate);
}

export function ValidategetPhoneCertificate(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("getPhoneCertificate", iCandidate);
}

export function IsgetPhoneCertificate(iCandidate: unknown): iCandidate is getPhoneCertificate {
   return GenericTypeGuard("getPhoneCertificate", iCandidate);
}

export function ValidategetPhoneOtpStatus(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("getPhoneOtpStatus", iCandidate);
}

export function IsgetPhoneOtpStatus(iCandidate: unknown): iCandidate is getPhoneOtpStatus {
   return GenericTypeGuard("getPhoneOtpStatus", iCandidate);
}

export function ValidateuploadMedia(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("uploadMedia", iCandidate);
}

export function IsuploadMedia(iCandidate: unknown): iCandidate is uploadMedia {
   return GenericTypeGuard("uploadMedia", iCandidate);
}

export function ValidateGetMediaUrl(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("GetMediaUrl", iCandidate);
}

export function IsGetMediaUrl(iCandidate: unknown): iCandidate is GetMediaUrl {
   return GenericTypeGuard("GetMediaUrl", iCandidate);
}

export function ValidateDeleteMedia(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("DeleteMedia", iCandidate);
}

export function IsDeleteMedia(iCandidate: unknown): iCandidate is DeleteMedia {
   return GenericTypeGuard("DeleteMedia", iCandidate);
}

export function ValidateMessageEvents(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("MessageEvents", iCandidate);
}

export function IsMessageEvents(iCandidate: unknown): iCandidate is MessageEvents {
   return GenericTypeGuard("MessageEvents", iCandidate);
}

export function ValidateOutBound(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("OutBound", iCandidate);
}

export function IsOutBound(iCandidate: unknown): iCandidate is OutBound {
   return GenericTypeGuard("OutBound", iCandidate);
}

export function ValidateAccount(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("Account", iCandidate);
}

export function IsAccount(iCandidate: unknown): iCandidate is Account {
   return GenericTypeGuard("Account", iCandidate);
}

export function ValidateMedia(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("Media", iCandidate);
}

export function IsMedia(iCandidate: unknown): iCandidate is Media {
   return GenericTypeGuard("Media", iCandidate);
}

export function ValidateWhatsappApiWrapper(iCandidate: unknown): ReturnType<typeof GenericValidator> {
   return GenericValidator("WhatsappApiWrapper", iCandidate);
}

export function IsWhatsappApiWrapper(iCandidate: unknown): iCandidate is WhatsappApiWrapper {
   return GenericTypeGuard("WhatsappApiWrapper", iCandidate);
}
