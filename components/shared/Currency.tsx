import { styled } from '@stitches/react'
import { Decimal } from 'decimal.js'
import NumberFormat, { NumberFormatProps, NumberFormatValues } from 'react-number-format'
import { formatTokenPriceString, formatUsdPriceString } from '~/library/utils'
import { MarketPriceCoin } from '~/types'
export interface CurrencyProps {
  coin: MarketPriceCoin
  value: Decimal | string
}

const StyledFormatNumber = styled(NumberFormat, {
  all: 'unset',
  color: '$marketplace-text',
  width: 104,
  height: 'fit-content',
  background: '$black',
  borderRadius: 5,
  padding: 10,
})

export const Currency = ({ value, coin }: CurrencyProps) => {
  const isUsd = coin === 'usd'
  const formatedValue = isUsd ? formatUsdPriceString(value) : formatTokenPriceString(value)
  return (
    <StyledFormatNumber
      value={formatedValue}
      displayType={'text'}
      decimalScale={isUsd ? 18 : 4}
      prefix={isUsd ? '$' : ''}
      thousandSeparator={true}
      renderText={(value) => <>{value}</>}
    />
  )
}

export type CurrencyInputProps = CurrencyProps & NumberFormatProps
export interface CurrencyFormatValues extends NumberFormatValues {}

export const CurrencyInput = ({ value, coin, ...props }: CurrencyInputProps) => {
  const isUsd = coin === 'usd'
  return (
    <StyledFormatNumber
      value={value}
      decimalScale={isUsd ? 0 : 3} // only 4 decimals in Eth price filter
      thousandSeparator={true}
      {...props}
    />
  )
}
