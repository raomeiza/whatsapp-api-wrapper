import { ConstructorOptions as ConstrucorOption, UploadFile as Upload, DeleteMedia as Delete, GetMediaUrl as GetUrl, DownloadFile as Downlaod } from './'

export interface ConstructorOptions extends ConstrucorOption { }

export interface UploadFile extends Upload { }

export interface DeleteMedia extends Delete { }

export interface DownloadFile extends Downlaod { }

export interface GetMediaUrl extends GetUrl { }
