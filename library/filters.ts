import { MarketSorting } from '~/types'

export type Filter_option = {
  [key: string]: string[]
}

export const market_sort_by_options = Object.entries(MarketSorting)

export const chain_filters = [
  {
    name: 'Ethereum',
    value: 'ethereum',
  },
  {
    name: 'Polygon',
    value: 'polygon',
  },
]

export const tier_filters = [
  {
    name: 'Ultra Rare',
    value: 'ultra-rare',
  },
  {
    name: 'Limited Edition',
    value: 'limited-edition',
  },
]

export const category_filters = [
  {
    name: 'Basketball',
    value: 'basketball',
  },
  {
    name: 'Baseball',
    value: 'baseball',
  },
  {
    name: 'Football',
    value: 'football',
  },
  {
    name: 'Soccer',
    value: 'soccer',
  },
]

// TODO: validate use of static values vs from DB
export const type_filters = [
  {
    name: 'Ball',
    value: 'ball',
  },
  {
    name: 'Card',
    value: 'card',
  },
  {
    name: 'Ticket',
    value: 'ticket',
  },
  {
    name: 'Trophy',
    value: 'trophy',
  },
  {
    name: 'Jersey',
    value: 'jersey',
  },
  // {
  //   name: 'Other',
  //   value: 'type-other',
  // },
]

export const collection_sort = [
  {
    title: 'All Items',
    value: '',
  },
  {
    title: 'Recently Added',
    value: 'recently-added',
  },
  {
    title: 'For Sale',
    value: 'for-sale',
  },
]

export const market_filters = [
  // {
  //   name: 'chain',
  //   label: 'Chain',
  //   options: chain_filters,
  // },
  {
    name: 'tier',
    label: 'Tier',
    options: tier_filters,
  },
  {
    name: 'category',
    label: 'Category',
    options: category_filters,
  },
  {
    name: 'asset_type',
    label: 'Type',
    options: type_filters,
  },
]
