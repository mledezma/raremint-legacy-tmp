import React, { ReactNode } from 'react'
import { routes } from '~/library/routes'
import { MyAccountIcon, MyInventoryIcon, MyWalletIcon } from '../icons'
import { NavWallet } from './NavWallet'

export type NavOptionKeys = 'marketplace' | 'learn' | 'mint' | 'inventory' | 'account' | 'wallet'

export interface SubNavOption {
  to: string
  text: string
  Component?: ReactNode
}

export interface NavOption {
  nav_key: NavOptionKeys
  label: string
  Icon?: React.FC<any>
  to?: string
  options?: SubNavOption[]
}

export const nav_options: NavOption[] = [
  {
    nav_key: 'marketplace',
    label: 'Marketplace',
    to: routes.marketplace,
  },
  {
    nav_key: 'learn',
    label: 'Learn',
    options: [
      {
        text: 'Articles',
        to: '/articles',
      },
      {
        text: 'About',
        to: '/learn/about',
      },
      {
        text: 'FAQ',
        to: '/learn/faq',
      },
      {
        text: 'Privacy',
        to: '/learn/privacy-policy',
      },
      {
        text: 'Terms of Service',
        to: '/learn/terms-of-service',
      },
    ],
  },
  {
    nav_key: 'mint',
    label: 'Mint',
    options: [
      {
        text: 'Pokémon',
        to: '/drops',
      },
      {
        text: 'Galaxy Pass',
        to: '/pass',
      },
    ],
  },
  {
    nav_key: 'inventory',
    label: 'My Inventory',
    Icon: MyInventoryIcon,
    options: [
      {
        text: 'My NFTs',
        to: '/my-collection/collected',
      },
      {
        text: 'My Favorites',
        to: '/my-collection/favorited',
      },
    ],
  },
  {
    nav_key: 'account',
    label: 'My Account',
    Icon: MyAccountIcon,
    options: [
      {
        text: 'Profile Settings',
        to: '/profile',
      },

      {
        text: 'Logout',
        to: '/actions/logout',
      },
    ],
  },
  {
    nav_key: 'wallet',
    label: 'Wallet',
    Icon: MyWalletIcon,
    options: [
      {
        Component: NavWallet,
        text: '',
        to: '',
      },
    ],
  },
]
