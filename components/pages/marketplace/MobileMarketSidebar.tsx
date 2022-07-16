import React from 'react'
import { styled } from '~/styles/stitches.config'
import { FiltersIcon } from '../../icons'
import { Box } from '../../primitives/Box'
import { Button } from '../../primitives/Button'
import { Divider } from '../../primitives/Divider'
import { Flex } from '../../primitives/Flex'
import { Text } from '../../primitives/Text'
import { motion } from 'framer-motion'
import { MarketFilter, MarketFilterType, MarketPriceRange } from '~/types'
import _ from 'lodash'
import { FilterChips } from '~/components/shared/FilterChips'
import { MarketplaceAccordion } from './MarketplaceAccordion'

const StyledMarketSidebar = styled('aside', {
  all: 'unset',
  position: 'fixed',
  top: 60,
  left: 0,
  backgroundColor: '$pop-up-dialogue-bg-color-100-opaque',
  minHeight: '50vh',
  height: '100%',
  width: '100%',
  zIndex: 100,
  flexDirection: 'column',
})

type MobileMarketSidebarProps = {
  market_filters: MarketFilter
  show_mobile_market_sidebar: boolean
  toggleMobileMarketplaceSidebar: () => void
  toggleMarketFilter: (filter_name: MarketFilterType, filter_value: string) => void
  applyMarketPriceFilter?: (range?: MarketPriceRange) => void
  clearFilters: () => void
}

export const MobileMarketSidebar = ({
  market_filters,
  show_mobile_market_sidebar,
  toggleMobileMarketplaceSidebar,
  toggleMarketFilter,
  applyMarketPriceFilter,
  clearFilters,
}: MobileMarketSidebarProps) => {
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const hasFilters =
    Object.values(market_filters.market_selection || {}).flat().length > 0 ||
    market_filters.market_price_range?.coin

  return (
    <StyledMarketSidebar
      as={motion.div}
      animate={{
        width: show_mobile_market_sidebar ? '100%' : 0,
        display: show_mobile_market_sidebar ? 'flex' : 'none',
      }}
      initial={false}
    >
      <Box css={{ px: '$large' }}>
        <Flex
          align="center"
          justify="between"
          css={{
            cursor: 'pointer',
          }}
          onClick={() => {
            toggleMobileMarketplaceSidebar()
          }}
        >
          {show_mobile_market_sidebar && (
            <Text css={{ fontSize: 16 }} variant="flat">
              Hide Filters
            </Text>
          )}
          {show_mobile_market_sidebar && (
            <Button css={{ py: 12 }} variant="transparent" icon={<FiltersIcon />} />
          )}
        </Flex>
        {show_mobile_market_sidebar && <Divider />}
        {hasFilters && (
          <Flex
            direction="column"
            css={{
              alignSelf: 'flex-start',
              width: '100%',
              py: 24,
            }}
          >
            <FilterChips
              market_filters={market_filters}
              toggleMarketFilter={toggleMarketFilter}
              removeMarketPriceFilter={applyMarketPriceFilter}
              clearFilters={clearFilters}
            />
          </Flex>
        )}
        <Box
          as={motion.div}
          initial={false}
          animate={{
            opacity: show_mobile_market_sidebar ? 1 : 0,
            transition: { type: 'spring', duration: 0.3 },
          }}
          variant="fluid"
          css={{ mt: '$x-small' }}
        >
          <MarketplaceAccordion
            show_market_sidebar={show_mobile_market_sidebar}
            market_filters={market_filters}
            toggleMarketFilter={toggleMarketFilter}
            applyMarketPriceFilter={applyMarketPriceFilter}
          />
        </Box>
      </Box>
    </StyledMarketSidebar>
  )
}
