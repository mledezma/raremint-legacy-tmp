import React from 'react'
import { styled } from '~/styles/stitches.config'
import { FiltersIcon } from '../../icons'
import { Box } from '../../primitives/Box'
import { Button } from '../../primitives/Button'
import { Divider } from '../../primitives/Divider'
import { Flex } from '../../primitives/Flex'
import { Text } from '../../primitives/Text'
import { motion } from 'framer-motion'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ExpandIcon } from '../../icons'
import { MarketFilter, MarketFilterType, MarketPriceRange } from '~/types'
import _ from 'lodash'
import { MarketplaceAccordion } from './MarketplaceAccordion'

const StyledMarketSidebar = styled('aside', {
  all: 'unset',
  display: 'none',
  '@small-min': {
    backgroundColor: '$marketplace-filter-panel-bg',
    display: 'block',
    minHeight: '50vh',
    height: 'auto',
    width: '100%',
    zIndex: 100,
  },
})

const Accordion = styled(AccordionPrimitive.Root, {
  minWidth: 300,
})

const AccordionItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,
  '&:first-child': {
    marginTop: 0,
  },
  '&:last-child': {},
  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  backgroundColor: 'transparent',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
})

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
})

const StyledPlusIcon = styled(ExpandIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': {
    transform: 'scaleY(0.5);',
  },
})

export const AccordionTrigger: React.FC = ({ children, ...props }) => (
  <StyledHeader>
    <StyledTrigger {...props}>
      {children}
      <Box css={{ pr: 10 }}>
        <StyledPlusIcon />
      </Box>
    </StyledTrigger>
  </StyledHeader>
)

export const AccordionContent: React.FC = ({ children, ...props }) => (
  <StyledContent {...props}>{children}</StyledContent>
)

type MarketSidebarProps = {
  market_filters: MarketFilter
  show_desktop_market_sidebar: boolean
  toggleDesktopMarketplaceSidebar: () => void
  toggleMarketFilter: (filter_name: MarketFilterType, filter_value: string) => void
  applyMarketPriceFilter?: (range?: MarketPriceRange) => void
}

export const DesktopMarketSidebar = ({
  market_filters,
  show_desktop_market_sidebar,
  toggleDesktopMarketplaceSidebar,
  toggleMarketFilter,
  applyMarketPriceFilter,
}: MarketSidebarProps) => {
  return (
    <StyledMarketSidebar
      as={motion.div}
      animate={{ maxWidth: show_desktop_market_sidebar ? 350 : 55 }}
      initial={false}
    >
      <Flex
        align="center"
        justify="between"
        css={{
          width: '100%',
          pl: show_desktop_market_sidebar ? '$large' : 0,
          cursor: 'pointer',
        }}
        onClick={() => {
          toggleDesktopMarketplaceSidebar()
        }}
      >
        {show_desktop_market_sidebar && (
          <Text css={{ fontSize: 16 }} variant="flat">
            Hide Filters
          </Text>
        )}
        <Button css={{ p: 12 }} variant="transparent" icon={<FiltersIcon />} />
      </Flex>
      {show_desktop_market_sidebar && <Divider />}
      <Flex direction="column" align="start" css={{ cursor: 'pointer', ml: '$large' }}>
        <Box
          as={motion.div}
          initial={false}
          animate={{
            opacity: show_desktop_market_sidebar ? 1 : 0,
            transition: { type: 'spring', duration: 0.3 },
          }}
          variant="fluid"
          css={{ pr: 22, mt: '$x-small' }}
        >
          <MarketplaceAccordion
            show_market_sidebar={show_desktop_market_sidebar}
            market_filters={market_filters}
            toggleMarketFilter={toggleMarketFilter}
            applyMarketPriceFilter={applyMarketPriceFilter}
          />
        </Box>
      </Flex>
    </StyledMarketSidebar>
  )
}
