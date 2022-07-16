import { StyledSelect } from '~/components/primitives/Select'
import { market_sort_by_options } from '~/library/filters'
import { MarketSortingTypes } from '~/types'

type MarketSelectProps = {
  default_value?: string
  onChange: (value: MarketSortingTypes) => void
}

export const MarketSelect = ({ default_value, onChange }: MarketSelectProps) => (
  <StyledSelect>
    <select
      value={default_value || ''}
      onChange={(e) => {
        onChange(e.target.value as MarketSortingTypes)
      }}
    >
      {market_sort_by_options.map((option) => {
        const [value, label] = option
        return (
          <option value={value} key={value}>
            {label}
          </option>
        )
      })}
    </select>
    <span></span>
  </StyledSelect>
)
