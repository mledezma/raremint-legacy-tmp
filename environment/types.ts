import * as env from 'env-var'
import { Chain } from '~/types'

// placeholder for feature flags
type FeatureFlags = {}

// smart contract addresses
type Contracts = {
  eth_marketplace: string
  polygon_marketplace: string
  galaxy_pass_nft: string
}

// apis and other services
type Services = {
  infura_api_key: string
  graphql_api: string
  graphql_api_key: string
  butter_api_token: string
  butter_api_url: string
  raremint_api_url: string
  mailchimp_url: string
  moonpay_currency_code: string
}

type Analytics = {
  google: string
  sentry: string
}

// ethereum network config
type Network = {
  chain: string
  chain_id: string
}

type WERT = {
  origin: string
  partnerId: string
}

type Cloudinary = {
  cloud_name: string
  api_key: string
}

// global application configuration based on env
export interface BuildFlags {
  environment: string
  login_message: string
  chains: Chain[]
  network: Network
  contracts: Contracts
  services: Services
  features: FeatureFlags
  wert: WERT
  analytics: Analytics
  cloudinary: Cloudinary
}

export interface BackendSecrets {
  cloudinary_api_secret: string
  session_storage_secret: string
}
