// all environment variables that are passed to the client
import * as env from 'env-var'
import { getInfuraChains } from './infura-chains'
import { BuildFlags } from './types'

export const build_flags: BuildFlags = {
  environment: env.get('NODE_ENV').required().asString(),
  login_message: 'Login to RareMint.com',
  chains: getInfuraChains(env.get('INFURA_API_KEY').required().asString()),
  network: {
    chain: env.get('CHAIN').required().asString(),
    chain_id: env.get('CHAIN_ID').required().asString(),
  },
  contracts: {
    eth_marketplace: env.get('ADDRESS_CONTRACT_ETHEREUM_MARKETPLACE').required().asString(),
    polygon_marketplace: env.get('ADDRESS_CONTRACT_POLYGON_MARKETPLACE').required().asString(),
    galaxy_pass_nft: env.get('ADDRESS_CONTRACT_GALAXY_PASS_MARKETPLACE').required().asString(),
  },
  services: {
    infura_api_key: env.get('INFURA_API_KEY').required().asString(),
    graphql_api: env.get('GRAPHQL_API').required().asString(),
    graphql_api_key: env.get('GRAPHQL_API_KEY').required().asString(),
    butter_api_token: env.get('BUTTER_API_TOKEN').required().asString(),
    butter_api_url: env.get('BUTTER_API_URL').required().asString(),
    raremint_api_url: env.get('API_APP').required().asString(),
    mailchimp_url: env.get('MAIL_CHIMP_BASEURL').required().asString(),
    moonpay_currency_code: env.get('MOONPAY_CURRENCYCODE').required().asString(),
  },
  wert: {
    origin: env.get('WERT_ORIGIN').required().asString(),
    partnerId: env.get('WERT_PARTNER_ID').required().asString(),
  },
  analytics: {
    google: env.get('GOOGLE_ANALYTICS').required().asString(),
    sentry: env.get('SENTRY_DSN').required().asString(),
  },
  cloudinary: {
    cloud_name: env.get('CLOUDINARY_CLOUD_NAME').required().asString(),
    api_key: env.get('CLOUDINARY_API_KEY').required().asString(),
  },
  features: {},
}
