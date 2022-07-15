// import { Link as RemixLink, NavLink as RemixNavLink } from '@remix-run/react'
// import type { RemixLinkProps, RemixNavLinkProps } from '@remix-run/react/components'
import React from 'react'
import { CSS, styled } from '~/styles/stitches.config'

// ToDo: fix this
// const StyledRemixLink = styled(RemixLink, {
//   color: '$primary-300',
//   textDecoration: 'none',
//   '&:hover': {
//     color: '$primary-400',
//   },
//   variants: {},
// })
// const StyledRemixNavLink = styled(RemixNavLink, {
//   color: '$primary-300',
//   textDecoration: 'none',
//   '&:hover': {
//     color: '$primary-400',
//   },
//   variants: {},
// })

// export interface LinkProps extends RemixLinkProps {
//   css?: CSS
// }
// export interface NavLinkProps extends RemixNavLinkProps {
//   css?: CSS
// }

// export const Link = (props: LinkProps & React.RefAttributes<HTMLAnchorElement>) => (
//   <StyledRemixLink {...props} />
// )

// export const NavLink = (props: NavLinkProps & React.RefAttributes<HTMLAnchorElement>) => (
//   <StyledRemixNavLink {...props} />
// )

export const Link = styled('a', {
  color: '$primary-300',
  textDecoration: 'none',
  '&:hover': {
    color: '$primary-400',
  },
  variants: {}
})

export const NavLink = styled('a', {
  color: '$primary-300',
  textDecoration: 'none',
  '&:hover': {
    color: '$primary-400',
  },
  variants: {}
})