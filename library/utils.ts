// This file is exclusively for Utilty functions
// These fucntions must be pure functions and perform simple tasks
// All interactions with apis go in the services folder.

import _ from 'lodash'
import type {
  MarketFilter,
  MarketFilterType,
  MarketPriceRange,
  MarketSortingTypes,
  SelectionFilter,
} from '~/types'
import { Buffer } from 'buffer'
import { useStore } from '~/store'
import type { FieldError } from 'react-hook-form'
import { Decimal } from 'decimal.js'
import type { PrismaClient } from '@prisma/client'

export const isBrowser = typeof window !== 'undefined'
export const isNode = !isBrowser
export const userAgent = isBrowser ? _.get(window, 'navigator.userAgent') : ''
export const ethereum = isBrowser && _.get(window, 'ethereum')
export const isAndroid = /(Android)/i.test(userAgent)
export const isIphone = /(iPhone|iPod)/i.test(userAgent)
export const isIpad = /(iPad)/i.test(userAgent)
export const isMobile = isIphone || isAndroid
// A mobile browser with ethereum we assume it's Metamask Browser
export const isMetamask = isMobile && ethereum
export const isLocalhost =
  isBrowser &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
export const timeAgo = (prevDate: any) => {
  prevDate = new Date(prevDate)
  const diff = Number(new Date()) - prevDate
  const minute = 60 * 1000
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = day * 365
  switch (true) {
    case diff < minute:
      const seconds = Math.round(diff / 1000)
      return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
    case diff < hour:
      return Math.round(diff / minute) + ' minutes ago'
    case diff < day:
      return Math.round(diff / hour) + ' hours ago'
    case diff < month:
      return Math.round(diff / day) + ' days ago'
    case diff < year:
      return Math.round(diff / month) + ' months ago'
    case diff > year:
      return Math.round(diff / year) + ' years ago'
    default:
      return ''
  }
}

export const formatTokenPrice = (price?: Decimal  | string): Decimal => {
  if (!price) return new Decimal(0)
  return new Decimal(price.toString())
}

export const formatUsdPrice = (price?: Decimal | string): Decimal => {
  if (!price) return new Decimal(0)
  return new Decimal(price.toString())
}

export const formatTokenPriceString = (price?: Decimal | string): string => {
  if (!price) return '0'
  return new Decimal(price.toString()).toFixed(6).toString()
}

export const formatUsdPriceString = (price?: Decimal | string): string => {
  if (!price) return '0'
  return new Decimal(price.toString()).round().toString()
}

export const formatShortAddress = (address: string | undefined): string => {
  if (!address) return ''
  return address.substring(0, 6) + '...' + address.substring(address.length - 5, address.length)
}

export function getBase64(file: File): Promise<any> {
  return new Promise((resolve, rejects) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader?.result)
    }
    reader.onerror = function (error) {
      rejects(error)
    }
  })
}

export function copyToClipboard(text: string) {
  const textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

export const converToHex = (text: string) => {
  let hex
  let result = ''
  for (let i = 0; i < text.length; i++) {
    hex = text.charCodeAt(i).toString(16)
    result += ('000' + hex).slice(-4)
  }

  return result
}

export const formatAddress = (key: string) => `${key.slice(0, 4)}...${key.slice(-4)}`

export const base64Encode = (obj: {}) => Buffer.from(JSON.stringify(obj)).toString('base64')
export const base64Decode = (str: string) => {
  try {
    if (!str || !str.trim()) return {}
    return JSON.parse(Buffer.from(str, 'base64').toString())
  } catch (error) {
    console.error(error)
    return {}
  }
}
export const marketFilteredRoute = (filter: SelectionFilter) =>
  '/marketplace?filter=' + base64Encode({ market_selection: filter })

export const marketSortByRoute = (order_by: MarketSortingTypes) =>
  '/marketplace?filter=' + base64Encode({ order_by })

export const addLeadingZeros = (str: string, grouping = 3) => {
  const length = str.length
  const total = Math.ceil(length / grouping) * grouping
  if (total !== length) {
    let l = total - length
    while (l--) str = '0' + str
  }
  return str
}

export const one_eth_in_wei = 1000000000000000000
export const one_dollar_in_cents = 100

export const decimal_one_eth_in_wei = new Decimal(1000000000000000000)
export const decimal_one_dollar_in_cents = new Decimal(100)

export const parseEthFromWei = (price: string) => {
  try {
    if (!price) return '0.5'
    // const validPrice = new Decimal(price).div(decimal_one_eth_in_wei).toString()
    return parseInt(price) / 1000000000000000000
  } catch (error) {
    return '0.5'
  }
}

export const getTokenPrice = (value: number) => new Decimal(value)
export const getUsdPrice = (value: number) => new Decimal(value)

export const ethToUsd = (eth_string: Decimal | string | undefined) => {
  if (!eth_string) return '0'
  const raw_price = useStore.getState().prices.find(({ pair }) => pair === 'eth-usd')?.price
  const eth_usd_price = new Decimal(raw_price ? raw_price.toString() : '0')
  const usd_value = new Decimal(eth_string).mul(eth_usd_price)
  return usd_value.toFixed(2)
}

export const usdToEth = (usd_string: Decimal | string | undefined, price?: Decimal | string) => {
  if (!usd_string) return '0'
  const raw_price =
    price || useStore.getState().prices.find(({ pair }) => pair === 'eth-usd')?.price
  const eth_usd_price = new Decimal(raw_price ? raw_price.toString() : '1')
  const usd_value = new Decimal(usd_string).div(eth_usd_price)
  return usd_value
}

export const attributeField = (
  attribueName: string,
  errorField?: FieldError,
  touchedField?: boolean,
) => {
  return { [attribueName]: !!errorField && !!touchedField }
}

export const normalizeChainId = (chain_id: number | string | undefined) => {
  try {
    if (chain_id && String(chain_id).length === 1) return parseInt(String(chain_id))
    if (chain_id && String(chain_id).length === 3) return parseInt(String(chain_id).slice(2))
    return 1
  } catch (error) {
    return 1
  }
}

type GetEncodedFiltersProps = {
  market_price_range?: MarketPriceRange
  market_order?: MarketSortingTypes
  filter_name?: MarketFilterType
  filter_value?: string
}
export const getEncodedMarketFilters = ({
  market_price_range,
  market_order,
  filter_name,
  filter_value,
}: GetEncodedFiltersProps) => {
  let new_filters = useStore.getState().market_filters
  if (market_order) new_filters.order_by = market_order
  if (market_price_range) new_filters.market_price_range = market_price_range
  if (filter_name && filter_value) new_filters = getFilters(new_filters, filter_name, filter_value)
  new_filters.price = useStore
    .getState()
    .prices.find(({ pair }) => pair === 'eth-usd')
    ?.price.toString()
  useStore.setState({ market_filters: new_filters })
  return base64Encode(new_filters)
}

export const getEncodedInventoryFilters = ({
  market_price_range,
  market_order,
  filter_name,
  filter_value,
}: GetEncodedFiltersProps) => {
  let new_filters = useStore.getState().inventory_filters
  if (market_order) new_filters.order_by = market_order
  if (filter_name && filter_value) new_filters = getFilters(new_filters, filter_name, filter_value)
  new_filters.price = useStore
    .getState()
    .prices.find(({ pair }) => pair === 'eth-usd')
    ?.price.toString()
  useStore.setState({ inventory_filters: new_filters })
  return base64Encode(new_filters)
}

export const clearInventoryFilters = () => {
  useStore.setState({
    inventory_filters: {},
  })
  return base64Encode({})
}

export const clearMarketFilters = () => {
  useStore.setState({
    market_filters: {},
  })
  return base64Encode({})
}

export const getFilters = (market_filters: MarketFilter, type: MarketFilterType, value: string) => {
  switch (type) {
    case 'chain':
    case 'tier':
    case 'asset_type':
    case 'category': {
      if (
        market_filters.market_selection &&
        market_filters.market_selection[type]?.includes(value)
      ) {
        return {
          ...market_filters,
          market_selection: {
            ...market_filters.market_selection,
            [type]: market_filters.market_selection[type]?.filter((v) => v !== value),
          },
        }
      }
      return {
        ...market_filters,
        market_selection: {
          ...market_filters.market_selection,
          [type]: market_filters.market_selection?.hasOwnProperty(type)
            ? [...market_filters.market_selection[type]!, value]
            : [value],
        },
      }
    }
    default:
      return {
        ...market_filters,
        [type]: value,
      }
  }
}
