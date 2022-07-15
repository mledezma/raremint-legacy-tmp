import createVanillaStore from 'zustand/vanilla'
import { SetState, GetState } from 'zustand'
import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import type { LayoutActions, LayoutState } from './layout-store'
import { createLayoutSlice } from './layout-store'
import type { AppSessionActions, AppSessionState } from './session-store'
import { createAppSessionSlice } from './session-store'
import { createPriceSlice, PriceActions, PriceState } from './price-store'
import { BuildFlagsActions, BuildFlagsState, createBuildFlagsSlice } from './build-flags-store'
import { createZustandSlice, ZustandState } from './zustand-state'
import { createWeb3AuthSlice, Web3AuthActions, Web3AuthState } from './web3auth-store'
import { isBrowser } from '../library/utils'

// typescript slicing: https://bit.ly/3qgvLbn
export type AppState = AppSessionState &
  LayoutState &
  PriceState &
  BuildFlagsState &
  ZustandState &
  Web3AuthState
export type AppStateActions = AppSessionActions &
  LayoutActions &
  PriceActions &
  BuildFlagsActions &
  Web3AuthActions
export type AppStore = AppState & AppStateActions

export type StoreSlice<T> = (set: SetState<AppStore>, get: GetState<AppStore>) => T

//github.com/pmndrs/zustand#using-zustand-without-react
export const store = createVanillaStore<AppStore>(
  // compose all slices into AppState
  (set, get) => ({
    ...createZustandSlice(set, get),
    ...createAppSessionSlice(set, get),
    ...createLayoutSlice(set, get),
    ...createPriceSlice(set, get),
    ...createBuildFlagsSlice(set, get),
    ...createWeb3AuthSlice(set, get),
  }),
)

// standard zustand store https://github.com/pmndrs/zustand
export const useStore = create(store)

// devtools https://github.com/beerose/simple-zustand-devtools
if (isBrowser) setTimeout(() => mountStoreDevtool('AppStore', useStore as any), 1000)

// typescrpt selector hooks: https://bit.ly/3fbBHfo
// export const useStore = createSelectorHooks<AppStore>(useStoreBase)   this breaks TypeScript