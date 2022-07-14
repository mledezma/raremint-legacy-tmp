import type { Prices } from '~/types'
import type { StoreSlice } from '.'
import { cryptocompare } from '~/services/cryptocompare'

export type PriceState = {
  prices: Prices[]
}

export type PriceActions = {
  setPrices: (prices: Prices[]) => void
  syncEthPrice: () => void
}

export type PriceStore = PriceState & PriceActions

export const createPriceSlice: StoreSlice<PriceStore> = (set, get) => ({
  prices: [],

  setPrices: (prices: Prices[]) => set({ prices }),

  syncEthPrice: () => {
    // hotfix for realtime
    // the indexer is currently not updating price, so we need this for now
    ;(async () => {
      try {
        const price = await cryptocompare.getEthUsdPrice()
        if (price) {
          console.log('✅ got price data', JSON.stringify(price))
          set({ prices: [{ pair: 'eth-usd', price, updated_at: new Date() }] })
        }
      } catch (error) {
        console.log('sync balance error', error)
      }
    })()
  },
})
