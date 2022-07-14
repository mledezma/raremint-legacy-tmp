import Decimal from 'decimal.js'
import { CatchExceptionSentry } from '~/library/sentry'

export const cryptocompare = {
  getEthUsdPrice: async () => {
    try {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
      ).then((r) => r.json())
      return new Decimal(response.USD)
    } catch (error) {
      CatchExceptionSentry(error as Error)
    }
  },
}
