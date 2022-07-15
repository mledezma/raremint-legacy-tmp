import { styled } from '~/styles/stitches.config'
import { Box } from '~/components/primitives/Box'
import { Card } from '~/components/primitives/Card'
import { Flex } from '~/components/primitives/Flex'
import { GlobalSearch } from '~/components/layout/GlobalSearch'
import { NavLink } from '~/components/primitives/Link'
import { Container } from '~/components/primitives/Container'
import { RaremintIcon } from '../icons'
import { NavOption, nav_options } from './nav-options'
import { FiChevronDown } from 'react-icons/fi'
import _ from 'lodash'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '~/store'
import { Image } from '~/components/primitives/Image'

const StyledDesktopNav = styled('nav', {
  px: '$small',
  width: '100%',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'space-between',
  // NOTE: breakpoint always at bottom of obj
  '@small-min': {
    display: 'flex',
  },
})
const LinkSubNav = styled(motion.div, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  width: 'max-content',
  ml: '$regular',
  // cursor: 'pointer',
})
const LinkComponent = styled(NavLink, {
  '&:hover, &:focus': {
    color: '$nav-bar-submenu-rollover',
  },
})
const LinkIconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    color: '$nav-bar-submenu-rollover',
  },
  variants: {
    color: {
      active: {
        color: '$nav-bar-submenu-rollover'
      },
      default: {
        color: 'inherit',
      }
    },
    fill: {
      hover: {
        '&:hover path, &:hover path': {
          fill: '$nav-bar-submenu-rollover'
        }
      }
    }
  }
})

const animation_props = {
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
}
const active_style = {
  color: 'var(--colors-nav-bar-submenu-rollover)',
}

const DesktopNavLink: React.FC<NavOption> = ({ label, Icon, options, to, nav_key }) => {
  const { active_nav_key, setActiveNavKey, user } = useStore()
  const active_nav = nav_key === active_nav_key

  return (
    <LinkSubNav key={`link-sub-nav-${nav_key}-${to}`}>
      {to ? (
        <LinkComponent
          href={to}
          // ToDo: Fix this
          onClick={() => setActiveNavKey(nav_key)}
          // style={({ isActive }) => (isActive ? active_style : undefined)}
        >
          {label}
        </LinkComponent>
      ) : (
        <LinkIconWrapper
          onClick={() => setActiveNavKey(active_nav ? null : nav_key)}
          // If user hover wallet but if this wallet is not logged, then we change color...
          color={active_nav ? 'active' : 'default'}
          fill={(user && nav_key !== 'wallet') || !user ? 'hover' : undefined}
        >
          {Icon ? (
            <>
              {nav_key === 'account' && user?.avatar ? (
                <Image variant="avatar" src={user?.avatar} alt="Avatar Image" />
              ) : (
                <Icon
                  connected={Boolean(user).toString()}
                  fill={active_nav ? 'var(--colors-nav-bar-submenu-rollover)' : undefined}
                />
              )}
            </>
          ) : (
            label
          )}{' '}
          {options && !Icon ? (
            <Box as={FiChevronDown} css={{ ml: 5 /* TODO: xs-small missing on scale */ }} />
          ) : null}
        </LinkIconWrapper>
      )}

      <AnimatePresence>
        {options && active_nav ? (
          <motion.div
            style={{
              position: 'absolute',
              right: -5,
              top: 50,
              transformOrigin: 'top',
            }}
            key={`nav_options__${nav_key}`}
            {...animation_props}
          >
            <Card
              variant="nav"
              css={{
                minWidth: 220,
                // TODO: add to scale 20px to it. To impr scale system
                py: 20,
                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.6)',
              }}
            >
              {options?.map(({ Component, text, to }) => {
                if (Component) return <Component key={`desktop-nav-comp-${text}}`} />

                return (
                  <LinkComponent
                    href={to}
                    key={`desktop-link-to-${to}`}
                    onClick={() => setActiveNavKey(null)}
                    style={({ isActive }) => (isActive ? active_style : undefined)}
                    css={{
                      color: '$navbar-submenu-inactive',
                      display: 'block',
                      borderBottom: '1px solid $submenu-item-divider-line',
                      // TODO: add to scale 13 or 14px to it. To impr scale system
                      py: 13,
                      fontWeight: '$extra-bold',
                      '&:last-of-type': {
                        borderColor: 'transparent',
                      },
                    }}
                  >
                    {text}
                  </LinkComponent>
                )
              })}
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LinkSubNav>
  )
}

export const DesktopNav = () => {
  return (
    <Container id="nav-container" max="large" css={{ p: 0 }}>
      <StyledDesktopNav>
        <Flex align="center" justify="start" css={{ width: '50%', height: 60 }}>
          <NavLink href="/" css={{ height: '100%', display: 'flex' }}>
            <RaremintIcon width="50" height="50" style={{ margin: 'auto 0' }} />
          </NavLink>

          <Box
            css={{
              width: '100%',
              maxWidth: '20.125rem',
              input: { width: '100%', maxWidth: 333, mr: '$x-small' },
            }}
          >
            <GlobalSearch />
          </Box>
        </Flex>
        <Flex align="center" justify="end" css={{ height: 60 }}>
          {nav_options.map((nav_props) => (
            <DesktopNavLink {...nav_props} key={`desktop-sublink-to-${nav_props.nav_key}`} />
          ))}
        </Flex>
      </StyledDesktopNav>
    </Container>
  )
}
