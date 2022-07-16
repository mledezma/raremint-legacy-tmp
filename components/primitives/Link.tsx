import React from 'react'
import NextLink from 'next/link';
import { styled } from '~/styles/stitches.config'

interface NavProps {
  href: string
  children: any
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
    <NextLink href={props.href} passHref>
      <CustomLink {...props}>
        {props.children}
      </CustomLink>
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