import { BuildFlags } from '~/environment'
import type { StoreSlice } from '.'

// dummy for solve typescript undefined build_flags, we know it'll always be defined but we need to make ts happy
export const dummy_build_flags: BuildFlags = {
  environment: '',
  login_message: 'Login to RareMint.com',
  chains: [],
  network: {
    chain: '',
    chain_id: '',
  },
  contracts: {
    eth_marketplace: '',
    polygon_marketplace: '',
    galaxy_pass_nft: '',
  },
  services: {
    infura_api_key: '',
    graphql_api: '',
    graphql_api_key: '',
    butter_api_token: '',
    butter_api_url: '',
    raremint_api_url: '',
    mailchimp_url: '',
    moonpay_currency_code: '',
  },
  analytics: {
    google: '',
    sentry: '',
  },
  cloudinary: {
    cloud_name: '',
    api_key: '',
  },
  features: {},
  wert: {
    origin: '',
    partnerId: '',
  },
}

export type BuildFlagsState = {
  build_flags: BuildFlags
}

export type BuildFlagsActions = {
  setBuildFlags: (build_flags: BuildFlags) => void
}

export type AppBuildFlagsStore = BuildFlagsState & BuildFlagsActions

const defaultBuildFlagsState: BuildFlagsState = {
  build_flags: dummy_build_flags,
}

export const createBuildFlagsSlice: StoreSlice<AppBuildFlagsStore> = (set) => ({
  ...defaultBuildFlagsState,

  setBuildFlags: (build_flags: BuildFlags) => set({ build_flags }),
})
