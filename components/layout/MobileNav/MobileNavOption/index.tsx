import React from 'react'
import { useStore } from '~/store'
import { NavOption } from '../../nav-options'
import { MobileSubNavMenu } from '../MobileSubNavMenu'
import NextLink from 'next/link';
import {
  MobileSubNavTogglerLabel,
  MobileNavOptionContainer,
  MobileNavRemixLink,
  MobileSubNavToggler,
  MobileSubNavTogglerIcon,
} from './styles'
import { Image } from '~/components/primitives/Image'
import { Box } from '~/components/primitives/Box'

const MobileNavFirstLevelOption = ({ label, to }: Pick<NavOption, 'label' | 'to'>) => {
  const { toggleMobileMenu } = useStore()
  return (
    <NextLink href={to!} key={`mobile-link-to-${to}`}>
      <MobileNavRemixLink onClick={() => toggleMobileMenu(false)}>
        {label}
      </MobileNavRemixLink>
    </NextLink>
  )
}

const MobileNavMenuOption = (nav_option: NavOption) => {
  const { user, setActiveNavKey } = useStore()
  return (
    <React.Fragment>
      <MobileSubNavToggler
        key={`mobile_subnav_toggler_${nav_option.label}`}
        onClick={() => setActiveNavKey(nav_option.nav_key)}
      >
        <MobileSubNavTogglerLabel>
          {nav_option.Icon ? (
            <>
              {nav_option.nav_key === 'account' && user?.avatar ? (
                <Box css={{ pr: '$small' }}>
                  <Image variant="avatar" src={user.avatar} alt="Avatar Image"/>
                </Box>
              ) : (
                <nav_option.Icon connected={Boolean(user).toString()} />
              )}
            </>
          ) : null}
          {nav_option.label}
        </MobileSubNavTogglerLabel>
        {nav_option.nav_key !== 'wallet' ? <MobileSubNavTogglerIcon /> : null}
      </MobileSubNavToggler>
      <MobileSubNavMenu {...nav_option} />
    </React.Fragment>
  )
}

export const MobileNavOption = (nav_props: NavOption) => (
  <MobileNavOptionContainer>
    {nav_props.to ? (
      <MobileNavFirstLevelOption {...nav_props} />
    ) : (
      <MobileNavMenuOption {...nav_props} />
    )}
  </MobileNavOptionContainer>
)
