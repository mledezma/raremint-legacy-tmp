import * as React from 'react'
import { styled } from '~/styles/stitches.config'

const TooltipWrapper = styled('div', {
  position: 'relative',
})
const TooltipStyled = styled('div', {
  position: 'absolute',
  background: 'black',
  padding: '3px 12px',
  borderRadius: '5px',
  color: '#e9ecef',
  top: -54,
  left: -32,
  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    width: 0,
    height: 0,
    borderTop: 'solid 5px black',
    borderLeft: 'solid 5px transparent',
    borderRight: 'solid 5px transparent',
  },
  // TODO: Position variants...
})

// TODO: Tooltip show animation
export const Tooltip: React.FC = ({ children }) => (
  <TooltipWrapper>
    <TooltipStyled>{children}</TooltipStyled>
  </TooltipWrapper>
)
