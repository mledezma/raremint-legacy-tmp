import axios, { AxiosRequestConfig } from 'axios'
import Butter from 'buttercms'
import { ButterServiceError } from '~/library/errors'
import { build_flags } from '../environment'

const butterAxios = axios.create({
  baseURL: build_flags.services.butter_api_url,
})

const defaultConfig: AxiosRequestConfig<any> = { params: {} }
const butterGet = <T>(url: string, { params, ...otherConfig } = defaultConfig) => {
  const config = {
    params: {
      auth_token: build_flags.services.butter_api_token,
      ...params,
    },
    ...otherConfig,
  }
  return butterAxios
    .get<T>(url, config)
    .then(({ data }) => data)
    .catch((error) => {
      console.error(`ButterService error: ${error.message}`)
      throw new ButterServiceError()
    })
}

export const butterService = {
  getPostList: (): Promise<{ data: any[] }> => butterGet('/posts'),
  getPostDetail: (slug: string) => butterGet(`/posts/${slug}`),
}

export const buttercms = Butter(build_flags.services.butter_api_token)
