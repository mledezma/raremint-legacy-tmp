// import { Link as RemixLink, NavLink as RemixNavLink } from '@remix-run/react'
// import type { RemixLinkProps, RemixNavLinkProps } from '@remix-run/react/components'
import React, { ReactElement } from 'react'
import NextLink from 'next/link';
import { styled } from '~/styles/stitches.config'

interface NavProps {
  href: string
  children: ReactElement
}

const CustomLink = styled('a', {
  color: '$primary-300',
  textDecoration: 'none',
  '&:hover': {
    color: '$primary-400',
  },
  variants: {}
})

export const Link = (props: React.RefAttributes<HTMLAnchorElement> & NavProps) => {
  const internal = /^\/(?!\/)/.test(props.href);
  return internal ? (
    <NextLink {...props} passHref>
      <a>
        {props.children}
      </a>
    </NextLink>
  ) : (
    <CustomLink
      {...props}
      href={props.href}
    >
      {props.children}
      </CustomLink>
  );
}

export const NavLink = CustomLink