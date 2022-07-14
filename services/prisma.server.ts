import { assets, favorites, Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import {
  Asset,
  AssetURI,
  MarketFilter,
  MarketSortingTypes,
} from '~/types'
import { build_flags } from '~/environment'
import _ from 'lodash'
import moment from 'moment'
import {prisma} from '~/library/prisma'
import { usdToEth } from '~/library/utils'

type GetAssetResult = assets & {
  favorites: favorites[]
}

type ToAssetProps = {
  asset: GetAssetResult
  user_address?: string
  is_favorite?: boolean
  is_user_owned?: boolean // TODO: validate optimization
}

const sortByTokenPrice = (asset: Asset) => Number(asset.token_price)
const sortByDate = (asset: Asset) => moment(asset.creation_date, 'x').unix()

const sortMarketAssetsBy = (
  assets: Asset[],
  order_by?: MarketSortingTypes,
  user_address?: string,
) => {
  const sold_out_items = []
  const owned_items = []
  const available_assets: Asset[] = []
  for (let i = 0, x = assets.length; i < x; ++i) {
    const ordered_asset = assets[i]
    if (new Decimal(ordered_asset.token_price.toString()).eq(0)) {
      if (ordered_asset.owner_of !== user_address) {
        sold_out_items.push(ordered_asset)
      } else {
        owned_items.push(ordered_asset)
      }
    } else {
      available_assets.push(ordered_asset)
    }
  }

  const sortAvailableAssets = () => {
    switch (order_by) {
      case 'high_low': {
        return _.orderBy(available_assets, [sortByTokenPrice, sortByDate], ['desc', 'desc'])
      }
      case 'latest': {
        return _.orderBy(available_assets, [sortByDate, 'token_price'], ['desc', 'asc'])
      }
      case 'popular': {
        return _.orderBy(available_assets, ['total_likes', sortByTokenPrice], ['desc', 'asc'])
      }
      // case 'low_high'
      default: {
        return _.orderBy(available_assets, [sortByTokenPrice, sortByDate], ['asc', 'desc'])
      }
    }
  }

  return [...sortAvailableAssets(), ...owned_items, ...sold_out_items]
}

export const toAsset = ({ asset, user_address, is_favorite }: ToAssetProps): Asset => {
  let sold_out = false
  let user_owned = false
  if (new Decimal(asset.token_price.toString()).eq(0) && asset.owner_of) {
    if (asset.owner_of !== build_flags.contracts.eth_marketplace) sold_out = true
    if (asset.owner_of === user_address) user_owned = true
  }
  const user_fav = user_address
    ? is_favorite || Boolean(asset.favorites?.find((fav) => fav.user_address === user_address))
    : false
  return {
    ...(_.omit(asset, ['favorites']) as Asset),
    user_fav,
    total_likes: asset.favorites?.length,
    sold_out,
    user_owned,
  }
}

export const getHomepageData = async () =>
  prisma.homepage.findFirst({
    where: {
      version: 'v0.2.0',
    },
  })

export const getUserFavorites = async (
  user_address: string,
  market_filters: MarketFilter,
): Promise<Asset[]> => {
  const favorites = await prisma.favorites.findMany({
    select: {
      assets: true,
    },
    where: {
      user_address,
    },
  })

  const asset_uris = favorites.map((fav) => fav.assets.asset_uri)

  const selectionFilters: Record<string, any>[] = []
  for (let [key, value] of Object.entries(market_filters.market_selection || {})) {
    if (value && value.length > 0) {
      selectionFilters.push({
        [key]: { in: value },
      })
    }
  }

  const where = {
    AND: [
      {
        asset_uri: {
          in: asset_uris,
        },
      },
      ...selectionFilters,
    ],
  }

  const filtered_assets = await getAssetsWithTrx({ where, user_address, is_favorite: true })

  return sortMarketAssetsBy(filtered_assets, market_filters.order_by, user_address)
}

export const getTotalFavorites = async () => prisma.favorites.findMany({})

export const getPrices = async () => prisma.prices.findMany()

export const getUserProfile = async (address: string) =>
  prisma.accounts.findUnique({ where: { address } })

export const getPendingTransactions = async (address: string) =>
  prisma.transactions.findMany({
    include: { assets: true },
    where: { signer: address, status: 'pending' },
  })

type GetAssetsWithTrxReq = {
  where: Prisma.assetsWhereInput | undefined
  user_address?: string
  is_favorite?: boolean
}

const getAssetsWithTrx = async ({
  where,
  user_address,
  is_favorite,
}: GetAssetsWithTrxReq): Promise<Asset[]> => {
  try {
    let filtered_assets: GetAssetResult[] = await prisma.assets.findMany({
      where,
      include: {
        favorites: true,
      },
    })
    let all_transactions = await prisma.transactions.findMany()
    return filtered_assets.map((asset) => {
      const asset_in_transaction = all_transactions.find((trx) => trx.asset_uri === asset.asset_uri)
      if (!asset_in_transaction) return toAsset({ asset, user_address, is_favorite })
      const updated_asset: Asset = {
        ...toAsset({ asset, user_address }),
        owner_of: asset_in_transaction.signer,
        pending: true,
      }
      return updated_asset
    })
  } catch (error) {
    // catch invalid filter
    return []
  }
}

export const getUserCollection = async (
  user_address: string,
  market_filters: MarketFilter,
): Promise<Asset[]> => {
  const user_owned = await prisma.assets.findMany({
    where: { owner_of: user_address.toLowerCase() },
  })
  const pending_transactions = await getPendingTransactions(user_address)
  const pending_assets = pending_transactions.map((p) => ({ ...p.assets, pending: true }))

  const asset_uris = _.uniq(
    [...pending_assets, ...user_owned].map((asset) => asset.asset_uri).filter((asset) => asset),
  )
  const selectionFilters: Record<string, any>[] = []
  for (let [key, value] of Object.entries(market_filters.market_selection || {})) {
    if (value && value.length > 0) {
      selectionFilters.push({
        [key]: { in: value },
      })
    }
  }

  const where = {
    AND: [
      {
        asset_uri: {
          in: asset_uris,
        },
      },
      ...selectionFilters,
    ],
  }
  const filtered_assets = await getAssetsWithTrx({ where, user_address })
  return sortMarketAssetsBy(filtered_assets, market_filters.order_by, user_address)
}

export const getAssetsInCollection = async (
  colletion: AssetURI[],
  user_address?: string,
): Promise<Asset[]> => {
  const assets = await prisma.assets.findMany({
    where: {
      asset_uri: {
        in: colletion,
      },
    },
    include: {
      favorites: true,
    },
  })
  return assets.map((asset) => toAsset({ asset, user_address }))
}

export const getAssetByURI = async (
  asset_uri: AssetURI,
  user_address?: string,
): Promise<Asset | null> => {
  const asset = await prisma.assets.findFirst({
    where: {
      asset_uri,
    },
    include: {
      favorites: true,
    },
  })
  return asset ? toAsset({ asset, user_address }) : null
}

export const getAssetsLimitedEdition = async (
  name: string,
  user_address?: string,
): Promise<Asset[]> => {
  const assets = await prisma.assets.findMany({
    where: {
      name,
      tier: 'Limited Edition',
    },
    include: {
      favorites: true,
    },
  })
  return assets.map((asset) => toAsset({ asset, user_address }))
}

type GetAssetsProps = {
  user_address?: string
  filters: MarketFilter
}

type PriceFilter = {
  token_price: {
    gte?: string
    lte?: string
  }
}

export const getAssets = async ({ user_address, filters }: GetAssetsProps) => {
  const order_by = filters.order_by
  const selectionFilters: Record<string, any>[] = []
  const range = filters.market_price_range
  for (let [key, value] of Object.entries(filters.market_selection || {})) {
    if (value && value.length > 0) {
      selectionFilters.push({
        [key]: { in: value },
      })
    }
  }

  const priceFilters: PriceFilter = {
    token_price: {},
  }
  if (range?.coin === 'eth') {
    if (range.min !== undefined) {
      priceFilters['token_price'].gte = range.min
    }
    if (range.max !== undefined) {
      priceFilters['token_price'].lte = range.max
    }
  } else {
    if (range?.min !== undefined) {
      priceFilters['token_price'].gte = usdToEth(range.min, filters.price).toString()
    }
    if (range?.max !== undefined) {
      priceFilters['token_price'].lte = usdToEth(range.max, filters.price).toString()
    }
  }

  const conditions = [priceFilters, ...selectionFilters]

  const where = {
    AND: Object.values(conditions).length > 0 ? conditions : undefined,
  }

  const updated_assets = await getAssetsWithTrx({ where, user_address })

  const all_limited_edition = _.filter(updated_assets, { tier: 'Limited Edition' })
  const all_other_assets = _.filter(updated_assets, (asset) => asset.tier !== 'Limited Edition')
  const grouped_limited_edition = _.groupBy(all_limited_edition, 'name')
  const limited_edition_assets = _.map(grouped_limited_edition, (limited_edition_group) => {
    // get the first available for sale of default to the frist one
    return (
      _.find(
        limited_edition_group,
        (asset) =>
          new Decimal(asset.token_price.toString()).greaterThan(0) &&
          asset.owner_of !== user_address,
      ) || limited_edition_group[0]
    )
  })
  const not_onwed_asset = _.filter(
    all_other_assets.concat(limited_edition_assets),
    ({ owner_of }) => owner_of !== user_address,
  )

  const sorted_assets = sortMarketAssetsBy(not_onwed_asset, order_by, user_address)

  return {
    filtered_assets: sorted_assets,
    user_address: user_address || null,
    market_filters: filters,
  }
}
