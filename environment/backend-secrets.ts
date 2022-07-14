// All environment secrets that wont be passed the client
import * as env from 'env-var'
import { BackendSecrets } from './types'

export const backend_secrets: BackendSecrets = {
  cloudinary_api_secret: env.get('CLOUDINARY_API_SECRET').required().asString(),
  session_storage_secret: env.get('SESSION_STORAGE_SECRET').required().asString(),
}
