import NextLink from 'next/link';
import { NavIcon, RaremintIcon } from '~/components/icons'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'

const MobileNavHeaderStyled = styled('nav', {
  px: '$small',
  width: '100%',
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',
  '@small-min': {
    display: 'none',
  },
})

export const MobileNavHomeLink = styled(NextLink, {
  display: 'flex',
  alignSelf: 'center',
})

export const MobileNavHeader = () => {
  const { show_mobile_menu, toggleMobileMenu } = useStore()

  return (
    <MobileNavHeaderStyled>
      <MobileNavHomeLink href="/" onClick={() => show_mobile_menu && toggleMobileMenu(false)} legacyBehavior={false}>
        <RaremintIcon width="50" height="50" />
      </MobileNavHomeLink>
      <NavIcon onClick={() => toggleMobileMenu()} />
    </MobileNavHeaderStyled>
  )
}
