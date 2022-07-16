import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'
import { NavOption } from '../nav-options'
import { MobileSubNavOption } from './MobileSubNavOption'
import { FiChevronLeft } from 'react-icons/fi'
import { Flex } from '~/components/primitives/Flex'
import React from 'react'

const MobileSubNavMenuMotion = styled(motion.div, {
  transformOrigin: 'top',
  width: '100vw',
  ml: '-$small',
  bg: '#29292E',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'start',
})

export const mobile_subnav_menu_animation_props = {
  animate: {
    height: 'auto',
    clipPath: 'inset(0% 0% 0% 0%)',
  },
  exit: {
    height: '0px',
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  initial: {
    height: '0px',
    clipPath: 'inset(0% 0% 100% 0%)',
  },
}

const wallet_return_nav_style = {
  bg: '#151515',
  borderBottom: '1px solid $submenu-item-divider-line',
  width: '100%',
  height: 60,
  border: 'none',
  color: 'inherit',
  fontWeight: 'inherit',
}
const wallet_nav_wrapper = {
  position: 'absolute',
  zIndex: 10000,
  top: 0,
}

export const MobileSubNavMenu = (nav_option: NavOption) => {
  const { active_nav_key, setActiveNavKey } = useStore()
  const open = nav_option.nav_key === active_nav_key
  const isWalletNav = active_nav_key === 'wallet'

  return (
    <AnimatePresence>
      {open ? (
        <MobileSubNavMenuMotion
          key={`nav_options__mobile__${nav_option.nav_key}`}
          css={isWalletNav ? wallet_nav_wrapper : undefined}
          {...mobile_subnav_menu_animation_props}
        >
          {nav_option.options?.map(({ Component, text, to }, idx) => {
            const WalletComponent =
              Component && isWalletNav && !text && !to ? (
                //  TODO: It's from a restoration, please add my wrapper
                <React.Fragment key={`nav_options__mobile__${nav_option.nav_key}${text}${to}`}>
                  <Flex
                    as="button"
                    type="button"
                    align="center"
                    css={wallet_return_nav_style}
                    onClick={() => setActiveNavKey(null)}
                  >
                    <Flex
                      as={FiChevronLeft}
                      css={{
                        ml: '$xs-small',
                        stroke: '$default-text-accentuate-color',
                        justifySelf: 'flex-end',
                        // NOTE: Did you know that font-sizes increases the stroke sizes? Sometimes the whole SVG...
                        fontSize: 42,
                        // NOTE: And also define how strokes would look if they are not perfect...
                        strokeLinecap: 'square',
                        // NOTE: And redefine it!
                        strokeWidth: 3,
                      }}
                    />
                    Return
                  </Flex>
                  <Component />
                </React.Fragment>
              ) : (
                Component
              )

            return Component ? WalletComponent : <MobileSubNavOption key={idx} to={to} text={text} />
          })}
        </MobileSubNavMenuMotion>
      ) : null}
    </AnimatePresence>
  )
}
