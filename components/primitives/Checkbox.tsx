import { styled } from '~/styles/stitches.config'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  size: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid $default-text-accentuate-color',
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$default-text-accentuate-color',
})

export const Checkbox = StyledCheckbox
export const CheckboxIndicator = StyledIndicator
