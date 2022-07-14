import type { assets, favorites } from '@prisma/client'
import type { Decimal } from 'decimal.js'

export type LoginStrategy = 'openlogin' | 'metamask' | 'walletconnect'

export type SelectData = {
  name: string
  value: string
}

export type Prices = {
  pair: string
  updated_at: Date | null
  price: Decimal
}

export type Address = string
export type Network = string
export type AppUser = {
  login_strategy: LoginStrategy
  address: Address
  network: Network
  eth_balance: Decimal
  usd_balance: Decimal
  chain_id: number
  avatar?: string | null
} | null

export type AppSearchOption = {
  text: string
  url: string
}

export type TokenTraitType =
  | 'Tier'
  | 'Edition'
  | 'Asset Backed'
  | 'Category'
  | 'Subject'
  | 'Team'
  | 'Authenticator'
  | 'Authentication Type'
  | 'Grade'
  | 'Type'
  | 'Digital Asset Creation Date'

export interface TokenAttribute {
  trait_type: TokenTraitType
  value: any
  display_type: string
  max_value?: number
}

export interface ERC721TokenMetadata {
  name: string
  description: string
  external_url: string
  image: string
  attributes: TokenAttribute[]
}
export interface ERC721Token {
  token_address: Address
  token_id: string
  block_number_minted: string
  owner_of: string
  block_number: string
  amount: string
  contract_type: string
  symbol: string
  token_uri: string
  metadata: ERC721TokenMetadata
  synced_at: Date
  is_valid: number
  syncing: number
  frozen: number
}

export interface MarketItem {
  item_id: number
  nft_contract: Address
  token_id: number
  seller: Address
  price: number
}

// ==================== Market and Assets ====================
// reference https://github.com/ProjectOpenSea/opensea-js/blob/master/src/types.ts#L346
export type AssetId = number
export type AssetURI = string
export type TransactionHash = string

export type MarketPriceCoin = 'eth' | 'usd' | undefined

export type MarketSort = any // Enumerable<assetsOrderByWithRelationInput>

export type InventoryType = 'favorited' | 'collected'

export type SelectionFilter = {
  asset_type?: string[]
  name?: string[]
  category?: string[]
  tier?: string[]
  chain?: string[]
}

export type MarketFilterType = keyof SelectionFilter

export type MarketFilter = {
  market_selection?: SelectionFilter
  market_price_range?: MarketPriceRange
  price?: string
  order_by?: MarketSortingTypes
}
export interface MarketPriceRange {
  coin: MarketPriceCoin
  min?: string
  max?: string
}

export enum MarketSorting {
  low_high = 'Price: Lowest to Highest',
  high_low = 'Price: Highest to Lowest',
  popular = 'Most Popular',
  latest = 'Latest Releases',
}

export type MarketSortingTypes = keyof typeof MarketSorting
export type OrderBy = 'desc' | 'asc'

export type FavoritesList = favorites[] | []

export interface Asset extends assets {
  pending?: boolean
  user_fav: boolean
  total_likes: number
  sold_out: boolean
  user_owned: boolean
}

// ==================== News / Articles  ====================

export type Post = {
  author: Author
  body: string
  categories: PostCategory[]
  created: string
  featured_image: string
  featured_image_alt: string
  meta_description: string
  published: string
  seo_title: string
  slug: string
  status: string
  summary: string
  title: string
  tags: string[]
  updated: string
  url: string
}

export type PostCategory = {
  name: string
  slug: string
}

export type Author = {
  bio: string
  email: string
  facebook_url: string
  first_name: string
  instagram_url: string
  last_name: string
  linkedin_url: string
  pinterest_url: string
  profile_image: string
  slug: string
  title: string
  twitter_handle: string
}

// ==================================== MoonPay ===========================================

export type MoonpayParams = {
  currencyCode: string
  walletAddress: string
  colorCode: string
  baseCurrencyCode: string
  externalCustomerId: string
}

// ==================================== WERT ===========================================

export type WertParams = {
  address: string
  commodity: string
  commodity_amount: number
  pk_id: string
  sc_address: string
  sc_id: string
  sc_input_data: string
}

// ==================================== Sentry ===========================================

export type SentrySpan = {
  op: string
  description: string
  data?: any
}

// ================================== OLD Types ===========================================
// ========================================================================================
export interface CardType {
  isNew: boolean
  type: 'slice' | 'ultra-rare' | 'limited-edition' | 'rare'
  favorite: number
  featureImage: string
  name: string
  description: string
  priceInETH: number
  priceInUSD: number
  isAuction: boolean
  auctionTimeLeft?: string
}

export interface Chain {
  name: string
  short_name: string
  chain: string
  network: string
  chain_id: number
  network_id: number
  rpc_url: string
  native_currency: AssetData
}

export interface AssetData {
  symbol: string
  name: string
  decimals: string
  contractAddress: string
  balance?: string
}
