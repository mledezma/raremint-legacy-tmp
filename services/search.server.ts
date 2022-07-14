import _ from 'lodash'
import { category_filters, tier_filters, type_filters } from '~/library/filters'
import { marketFilteredRoute } from '~/library/utils'
import { prisma } from '../library/prisma'
import type { AppSearchOption } from '../types'

export const MARKETPLACE_FILTER = [...tier_filters, ...category_filters, ...type_filters]

export const MARKETPLACE_CONFIG = {
  itemPerPage: 12,
}

// static categories, filters, types.
const static_search_options = [
  ...category_filters.map((filter) => ({
    text: filter.name,
    url: marketFilteredRoute({ category: [filter.name] }),
  })),
  ...tier_filters.map((filter) => ({
    text: filter.name,
    url: marketFilteredRoute({ tier: [filter.name] }),
  })),
  ...type_filters.map((filter) => ({
    text: filter.name,
    url: marketFilteredRoute({ asset_type: [filter.name] }),
  })),
]

export const getSearchOptions = async () => {
  const assets = await prisma.assets.findMany()
  const grouped_assets = _.groupBy(assets, 'name')

  // dynamic options created from the assets in the database
  const asset_options: AppSearchOption[] = _.map(grouped_assets, (assets_group) => ({
    text: assets_group[0].name,
    url:
      assets_group.length > 1
        ? marketFilteredRoute({ name: [assets_group[0].name] })
        : `/asset/${assets_group[0].asset_id}`,
  }))

  const search_options = static_search_options.concat(asset_options) as AppSearchOption[]

  return search_options
}
