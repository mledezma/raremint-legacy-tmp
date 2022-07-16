import React from 'react'
import { styled } from '~/styles/stitches.config'
import { CheckIcon, CollapseIcon, ExpandIcon } from '../../icons'
import { Box } from '../../primitives/Box'
import { Button } from '../../primitives/Button'
import { Divider } from '../../primitives/Divider'
import { Flex } from '../../primitives/Flex'
import { Text } from '../../primitives/Text'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Checkbox } from '../../primitives/Checkbox'
import { CheckboxIndicator } from '../../primitives/Checkbox'
import { Label } from '../../primitives/Label'
import { Filter_option, market_filters as market_filters_list } from '~/library/filters'
import { MarketFilter, MarketFilterType, MarketPriceCoin, MarketPriceRange } from '~/types'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupRadio,
} from '~/components/primitives/RadioGroup'
import { CurrencyFormatValues, CurrencyInput } from '~/components/shared/Currency'
import { useSetState } from 'react-use'

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
  '[data-state=open] &': {
    display: 'none',
  },
})

const StyledMinusIcon = styled(CollapseIcon, {
  '[data-state=closed] &': {
    display: 'none',
  },
})

export const AccordionTrigger: React.FC = ({ children, ...props }) => (
  <StyledHeader>
    <StyledTrigger {...props}>
      {children}
      <Box css={{ pr: 10 }}>
        <StyledMinusIcon />
        <StyledPlusIcon />
      </Box>
    </StyledTrigger>
  </StyledHeader>
)

export const AccordionContent: React.FC = ({ children, ...props }) => (
  <StyledContent {...props}>{children}</StyledContent>
)

const RangeErrorMessage = () => (
  <Text
    css={{
      color: '$marketplace-filter-icons-buttons-and-text',
      fontWeight: 600,
      fontSize: 14,
      mt: 24,
      mb: 0,
      p: 0,
    }}
  >
    The maximum must be more than the minimum!
  </Text>
)

type MarketplaceAccordion = {
  show_market_sidebar: boolean
  market_filters: MarketFilter
  toggleMarketFilter: (filter_name: MarketFilterType, filter_value: string) => void
  applyMarketPriceFilter?: (range?: MarketPriceRange) => void
}

export const MarketplaceAccordion = ({
  show_market_sidebar,
  market_filters,
  toggleMarketFilter,
  applyMarketPriceFilter,
}: MarketplaceAccordion) => {
  const [price_filter, setPriceFilter] = useSetState(market_filters.market_price_range)
  const invalid_price_range =
    price_filter?.min && price_filter?.max && Number(price_filter?.min) > Number(price_filter?.max)
  const selection_filters: Filter_option = market_filters.market_selection || {}
  return (
    <AccordionPrimitive.Root type="multiple">
      {applyMarketPriceFilter && (
        <>
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                defaultValue={price_filter?.coin || 'usd'}
                aria-label="price"
                onValueChange={(value) => {
                  setPriceFilter({ coin: value as MarketPriceCoin })
                }}
              >
                <Flex direction="column" css={{ gap: 14, pt: 30 }}>
                  <Flex css={{ gap: 8 }}>
                    <RadioGroupRadio value="usd" id="usd">
                      <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor="usd">United States Dollar (USD)</Label>
                  </Flex>
                  <Flex css={{ gap: 8 }}>
                    <RadioGroupRadio value="eth" id="eth">
                      <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor="eth">Ether (ETH)</Label>
                  </Flex>
                </Flex>
              </RadioGroup>
              <Flex align="center" css={{ gap: '$x-small', pt: 18 }}>
                <CurrencyInput
                  coin={price_filter?.coin || 'usd'}
                  placeholder="min"
                  value={price_filter?.min?.toString() || ''}
                  onValueChange={({ floatValue }: CurrencyFormatValues) => {
                    setPriceFilter({ min: floatValue?.toString() || '' })
                  }}
                />
                {' to '}
                <CurrencyInput
                  coin={price_filter?.coin || 'usd'}
                  placeholder="max"
                  value={price_filter?.max?.toString() || ''}
                  onValueChange={({ floatValue }: CurrencyFormatValues) => {
                    setPriceFilter({ max: floatValue?.toString() || '' })
                  }}
                />
              </Flex>
              {invalid_price_range && <RangeErrorMessage />}
              <Box css={{ py: 24 }}>
                <Button
                  css={{ fontWeight: 700, fontSize: 16, minWidth: 124 }}
                  text="Apply Filter"
                  variant={invalid_price_range ? 'cancel_action' : 'filter'}
                  size="small"
                  disabled={invalid_price_range}
                  onClick={() => {
                    applyMarketPriceFilter({
                      ...price_filter,
                      coin: price_filter?.coin || 'usd',
                    })
                  }}
                />
              </Box>
            </AccordionContent>
          </AccordionItem>
          <Divider />
        </>
      )}

      {market_filters_list.map((filter, index) => {
        return (
          <React.Fragment key={filter.name}>
            <AccordionItem value={filter.name}>
              <AccordionTrigger>{filter.label}</AccordionTrigger>
              <AccordionContent>
                {filter.options.map((option) => {
                  return (
                    <Flex key={option.value} align="center" css={{ mb: '$x-small' }}>
                      <Checkbox
                        checked={Boolean(
                          selection_filters[filter.name as keyof Filter_option]?.includes(
                            option.name,
                          ),
                        )}
                        id={option.value}
                        onCheckedChange={() => {
                          toggleMarketFilter(filter.name as MarketFilterType, option.name)
                        }}
                      >
                        <CheckboxIndicator>
                          <CheckIcon />
                        </CheckboxIndicator>
                      </Checkbox>
                      <Label
                        variant="filter"
                        css={{ paddingLeft: '$small' }}
                        htmlFor={option.value}
                      >
                        {option.name}
                      </Label>
                    </Flex>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
            {show_market_sidebar && index < market_filters_list.length - 1 && <Divider />}
          </React.Fragment>
        )
      })}
    </AccordionPrimitive.Root>
  )
}
