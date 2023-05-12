import {
  ConstructorOptions as ConstructorOption,
  GetProfile as Profile,
  UpdateProfile as Update,
  RequestPhoneVerification as RequestToVerify,
  VerifyPhone as Verify,
  GetPhoneNumbers as GetNumber,
  GetPhoneNumbersByFilter as GetByFilter,
  GetDisplayStatus as Status,
  AddPhoneNumber as AddNumbers,
  getPhoneCertificate as GetCertificate,
  getPhoneOtpStatus as OtpStatus
} from './'

export interface ConstructorOptions extends ConstructorOption {}

export interface GetProfile extends Profile {}

export interface UpdateProfile extends Update {}

export interface RequestPhoneVerification extends RequestToVerify {}

export interface VerifyPhone extends Verify {}

export interface GetPhoneNumbers extends GetNumber {}

export interface GetPhoneNumbersByFilter extends GetByFilter {}

export interface GetDisplayStatus extends Status {}

export interface AddPhoneNumber extends AddNumbers {}

export interface getPhoneCertificate extends GetCertificate {}

export interface getPhoneOtpStatus extends OtpStatus {}
