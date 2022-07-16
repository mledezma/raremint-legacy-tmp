import { styled } from '@stitches/react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'transparent',
  width: 18,
  height: 18,
  borderRadius: '100%',
  border: '3px solid $default-text-accentuate-color',
})

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '$default-text-accentuate-color',
  },
})

// Exports
export const RadioGroup = RadioGroupPrimitive.Root
export const RadioGroupRadio = StyledRadio
export const RadioGroupIndicator = StyledIndicator
