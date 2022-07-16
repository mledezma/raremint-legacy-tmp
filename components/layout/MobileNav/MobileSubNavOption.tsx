import NextLink from 'next/link';
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'

const MobileSubNavOptionLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid $submenu-item-divider-line',
  p: '$small',
  minHeight: 60,
  width: '100vw',
  textDecoration: 'none',
  fontWeight: '$bold',
  color: 'white',
  '&:first-of-type': {
    borderTop: '1px solid $submenu-item-divider-line',
  },
})

export interface MobileSubNavOptionProps {
  to: string
  text: string
}

export const MobileSubNavOption = ({ to, text }: MobileSubNavOptionProps) => {
  const { toggleMobileMenu } = useStore()
  return (
    <NextLink
      href={to}
      key={`mobile-link-to-${to}`}
    >
      <MobileSubNavOptionLink onClick={() => toggleMobileMenu(false)}>{text}</MobileSubNavOptionLink>
    </NextLink>
  )
}
