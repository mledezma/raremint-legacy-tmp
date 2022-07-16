import { FiChevronRight } from 'react-icons/fi'
import { styled } from '~/styles/stitches.config'

export const MobileNavOptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'between',
  cursor: 'pointer',
  minHeight: 60,
  borderTop: '1px solid #363636',
  px: '$small',
})

export const MobileNavRemixLink = styled('a', {
  color: 'white',
  pt: 20,
  maxHeight: 60,
  fontWeight: '$bold',
  textDecoration: 'none',
  '&:hover': { color: '$nav-bar-submenu-rollover' },
})

export const MobileSubNavToggler = styled('div', {
  minHeight: 60,
  display: 'flex',
  fontWeight: '$bold',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const MobileSubNavTogglerLabel = styled('div', {
  display: 'flex',
  pr: '$x-small',
  alignItems: 'center',
  svg: {
    mr: '$small',
  },
})

export const MobileSubNavTogglerIcon = styled(FiChevronRight, {
  display: 'flex',
  justifySelf: 'flex-end',

  ml: '$xs-small',
  stroke: '$default-text-accentuate-color',
  // NOTE: Did you know that font-sizes increases the stroke sizes? Sometimes the whole SVG...
  fontSize: 42,
  // NOTE: And also define how strokes would look if they are not perfect...
  strokeLinecap: 'square',
  // NOTE: And redefine it!
  strokeWidth: 3,
})
