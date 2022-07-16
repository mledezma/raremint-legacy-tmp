import _ from 'lodash'
import { MarketFilter, MarketFilterType } from '~/types'
import { Box } from '../primitives/Box'
import { Text } from '../primitives/Text'
import { Flex } from '../primitives/Flex'
import FilterTagItem from './FilterTagItem'

type FilterChipsProps = {
  toggleMarketFilter: (filter_name: MarketFilterType, filter_value: string) => void
  removeMarketPriceFilter?: () => void
  clearFilters: () => void
  market_filters: MarketFilter
}

export const FilterChips = ({
  toggleMarketFilter,
  removeMarketPriceFilter,
  clearFilters,
  market_filters,
}: FilterChipsProps) => {
  const active_filters = _.omit(market_filters.market_selection || {}, 'name')
  const hasFilters =
    Object.values(active_filters).flat().length > 0 || market_filters.market_price_range?.coin
  if (!hasFilters) return null
  return (
    <Box css={{ width: '100%', alignSelf: 'end' }}>
      {hasFilters && <Box css={{ pb: 10 }}>Filtered by:</Box>}
      <Flex css={{ gap: 10 }} align="center" wrap="wrap">
        {removeMarketPriceFilter && market_filters.market_price_range?.coin && (
          <FilterTagItem
            label={`${market_filters.market_price_range?.min || 0} - ${
              market_filters.market_price_range?.max || 'Any'
            } ${market_filters.market_price_range?.coin.toUpperCase()}`}
            key={'price'}
            handleRemove={removeMarketPriceFilter}
          />
        )}
        {Object.keys(active_filters).map((filterName) => {
          const filters = _.get(market_filters.market_selection, filterName) || []
          return filters.map((value: string) => {
            return (
              <FilterTagItem
                label={value}
                key={value}
                handleRemove={() => {
                  toggleMarketFilter(filterName, value)
                }}
              />
            )
          })
        })}

        <Text
          variant="filter"
          onClick={clearFilters}
          css={{
            color: 'white',
            '@small-max': {
              marginLeft: 'auto',
            },
          }}
        >
          Clear All
        </Text>
      </Flex>
    </Box>
  )
}
