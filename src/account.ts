/* eslint-disable @typescript-eslint/naming-convention */
import * as validator from './../typings/validate-account'
import {
  AddPhoneNumber,
  GetPhoneNumbers,
  GetProfile,
  VerifyPhone,
  Account as AccountInterface,
  RequestPhoneVerification,
  GetPhoneNumbersByFilter,
  GetDisplayStatus,
  getPhoneCertificate,
  getPhoneOtpStatus,
  BusinessProfile
} from '../typings'
import { Base } from './base'
import { UpdateProfile } from '../typings/account'

export class Account extends Base implements AccountInterface {
  public getProfile: GetProfile = async (businessId?: string) => {
    return this.graphClient.request({ path: 'whatsapp_business_profile', method: 'GET', WABA_ID: businessId ?? businessId })
  }

  public updateProfile: UpdateProfile = async (data: BusinessProfile) => {
    const validateRequest = validator.ValidateUpdateProfile(data)
    if (!validateRequest.Success) {
      throw new Error(JSON.stringify(validateRequest.Errors))
    }

    return this.graphClient.request({ path: 'whatsapp_business_profile', method: 'POST' }, data)
  }

  public requestPhoneVerification: RequestPhoneVerification = async (data) => {
    const { phoneNumberId, codeMethod, language } = data
    const validateRequest = validator.ValidateRequestPhoneVerification(data)
    if (!validateRequest.Success) {
      throw new Error(JSON.stringify(validateRequest.Errors))
    }
    return this.graphClient.request({ method: 'POST', path: 'request_code', PHONE_NUMBER_ID: phoneNumberId ?? phoneNumberId }, { code_method: codeMethod ?? 'SMS', language: language ?? 'en' })
  }

  public verifyPhone: VerifyPhone = async (data) => {
    (data.phone_number_id == null) && (data.phone_number_id = Number(this.PHONE_NUMBER_ID))
    // const validateRequest = validator.VerifyPhone(data)
    // if (!validateRequest.Success) {
    //   throw new Error(JSON.stringify(validateRequest.Errors))
    // }
    return this.graphClient.request({ method: 'POST', path: 'verify_code' }, data)
  }

  public getPhoneNumbers: GetPhoneNumbers = async (whatsapp_business_id?) => {
    whatsapp_business_id = whatsapp_business_id ?? Number(this.WABA_ID)
    return this.graphClient.request({ path: 'phone_numbers' })
  }

  public getPhoneNumbersByFilter: GetPhoneNumbersByFilter = async (filters) => {
    const validateRequest = validator.ValidateGetPhoneNumbersByFilter(filters)
    if (!validateRequest.Success) {
      throw new Error(JSON.stringify(validateRequest.Errors))
    }

    return this.graphClient.request({})
  }

  public getDisplayStatus: GetDisplayStatus = async (data) => {
    return this.graphClient.request({})
  }

  public addPhoneNumber: AddPhoneNumber = async (data) => {
    return this.graphClient.request({})
  }

  public getPhoneCertificate: getPhoneCertificate = async (data) => {
    return this.graphClient.request({})
  }

  public getPhoneOtpStatus: getPhoneOtpStatus = async (data) => {
    return this.graphClient.request({})
  }
}
