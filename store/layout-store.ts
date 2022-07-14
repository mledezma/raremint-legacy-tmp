// import { NavOptionKeys } from '~/components/layout/nav-options'
import { isBrowser } from '~/library/utils'
// import { syncBalance } from '~/session/wallet.client'
import { AppSearchOption, MarketFilter } from '~/types'
import type { StoreSlice } from '.'

export type TopMessageType = 'info' | 'alert' | 'confirmation'

export type LayoutState = {
  show_wallet: boolean
  show_desktop_market_sidebar: boolean
  show_mobile_market_sidebar: boolean
  show_desktop_inventory_sidebar: boolean
  show_mobile_inventory_sidebar: boolean
  show_mobile_menu: boolean
  top_message: string
  top_message_type: TopMessageType
  search_options: AppSearchOption[]
  market_filters: MarketFilter
  inventory_filters: MarketFilter
  active_nav_key: any // NavOptionKeys | null
  disable_buy_asset: boolean
}

export type LayoutActions = {
  setShowWallet: (value: boolean) => void
  setMarketplaceFilters: (filters: MarketFilter) => void
  toggleDesktopMarketplaceSidebar: () => void
  toggleDesktopInventorySidebar: () => void
  toggleMobileMarketplaceSidebar: () => void
  toggleMobileInventorySidebar: () => void
  toggleMobileMenu: (value?: boolean) => void
  setTopbarMessage: (top_message: string, top_message_type?: TopMessageType) => void
  setActiveNavKey: (value: any | null) => void
  setNetworkAlert: (text: string, disable: boolean) => void
}

export type LayoutStore = LayoutState & LayoutActions

const defaultLayoutState: LayoutState = {
  show_wallet: false,
  show_desktop_market_sidebar: false,
  show_mobile_market_sidebar: false,
  show_desktop_inventory_sidebar: false,
  show_mobile_inventory_sidebar: false,
  top_message: '',
  top_message_type: 'info',
  search_options: [],
  market_filters: {},
  inventory_filters: {},
  active_nav_key: null,
  show_mobile_menu: false,
  disable_buy_asset: false,
}

export const createLayoutSlice: StoreSlice<LayoutStore> = (set, get) => ({
  ...defaultLayoutState,

  setShowWallet: (show_wallet) => set({ show_wallet }),

  setMarketplaceFilters: (market_filters) => set({ market_filters }),

  toggleDesktopMarketplaceSidebar: () =>
    set({ show_desktop_market_sidebar: !get().show_desktop_market_sidebar }),

  toggleMobileMarketplaceSidebar: () => {
    if (isBrowser) {
      if (get().show_mobile_market_sidebar) document.body.style.overflow = 'auto'
      else document.body.style.overflow = 'hidden'
    }
    set({ show_mobile_market_sidebar: !get().show_mobile_market_sidebar })
  },

  toggleDesktopInventorySidebar: () =>
    set({ show_desktop_inventory_sidebar: !get().show_desktop_inventory_sidebar }),

  toggleMobileInventorySidebar: () => {
    if (isBrowser) {
      if (get().show_mobile_inventory_sidebar) document.body.style.overflow = 'auto'
      else document.body.style.overflow = 'hidden'
    }
    set({ show_mobile_inventory_sidebar: !get().show_mobile_inventory_sidebar })
  },

  setTopbarMessage: (top_message: string, top_message_type = 'info') => {
    set({ top_message, top_message_type })
    // TODO check with @gabos
    setTimeout(() => {
      set({ top_message: '' })
    }, 7000)
  },

  setActiveNavKey: (active_nav_key) => set({ active_nav_key }),

  toggleMobileMenu: (value?: boolean) =>
    set({ show_mobile_menu: value || !get().show_mobile_menu, active_nav_key: null }),

  setNetworkAlert: (text: string, disable = false) =>
    set({ disable_buy_asset: disable, top_message: text, top_message_type: 'alert' }),
})
