// ToDo: Add funcionality for LoaderFunction.
// import type { LoaderFunction } from '@remix-run/node'
// import { json } from '@remix-run/node'
// import { clearMarketFilters, getEncodedMarketFilters } from '~/library'
// import _ from 'lodash'

import type {
  OrderBy,
  MarketSortingTypes,
  MarketPriceRange,
  MarketFilter,
  Asset,
  MarketFilterType,
} from '~/types'

import { base64Decode } from '~/library/utils'
// ToDo: Fix imports for LoaderFunction.
// import { auth } from '~/session/auth.server'
// import { useLoaderData, useSubmit } from '@remix-run/react'
import { AssetList } from '~/components/shared/AssetList'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { Button } from '~/components/primitives/Button'
import { Flex } from '~/components/primitives/Flex'
import { FilterChips } from '~/components/shared/FilterChips'
import { FiltersIcon } from '~/components/icons'
import { DesktopMarketSidebar } from '~/components/pages/marketplace/DesktopMarketSidebar'
import { MobileMarketSidebar } from '~/components/pages/marketplace/MobileMarketSidebar'
import { MarketSelect } from '~/components/shared/MarketSelect'
import { TotalItemsText } from '~/components/pages/marketplace/TotalItemsText'
import { NotResult } from '~/components/pages/marketplace/NotResults'
import { useStore } from '~/store'
import { useEffectOnce } from 'react-use'

/* export interface MarketPlaceLoaderData {
  filtered_assets: Asset[]
  market_filters: MarketFilter
  current_filter: string
}
// Ignorar de momento.
export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request)
  const url = new URL(request.url)
  const filter = url.searchParams.get('filter') || ''
  const market_filters = (filter ? base64Decode(filter) : {}) as MarketFilter

  const { filtered_assets } = await getAssets({
    user_address: user?.address,
    filters: market_filters,
  })

  return json<MarketPlaceLoaderData>({
    filtered_assets,
    market_filters,
    current_filter: filter,
  })
}

const MarketPlacePage = () => {
  const {
    show_desktop_market_sidebar,
    show_mobile_market_sidebar,
    toggleMobileMarketplaceSidebar,
    toggleDesktopMarketplaceSidebar,
    syncEthPrice,
  } = useStore()
  const { filtered_assets, market_filters } = useLoaderData<MarketPlaceLoaderData>()
  const submit = useSubmit()

  const submitFilters = (encoded_filters: string) => {
    submit(
      {
        filter: encoded_filters,
      },
      { method: 'get' },
    )
  }

  const toggleMarketFilter = (filter_name: MarketFilterType, filter_value: string) => {
    const encoded_filters = getEncodedMarketFilters({ filter_name, filter_value })
    submitFilters(encoded_filters)
  }

  const orderBy = (order_by: MarketSortingTypes) => {
    const encoded_filters = getEncodedMarketFilters({ market_order: order_by })
    submitFilters(encoded_filters)
  }

  const applyMarketPriceFilter = (range?: MarketPriceRange) => {
    const encoded_filters = getEncodedMarketFilters({ market_price_range: range })
    submitFilters(encoded_filters)
  }

  const clearFilters = () => {
    const encoded_filters = clearMarketFilters()
    submitFilters(encoded_filters)
  }
  const total_assets = filtered_assets.length

  useEffectOnce(() => {
    syncEthPrice()
  })
*/

const MarketPlacePage = () => {
  return (
    <Flex
      direction="column"
      css={{
        width: '100%',
        px: '$small',
        '@small-min': {
          px: 0,
          pt: 18,
        },
      }}
    >
      <Flex
        css={{
          '@small-min': {
            width: '100%',
            pl: 107,
          },
        }}
      >
        <Breadcrumb path={[{ url: '/', label: 'Home' }, { label: 'Marketplace' }]} />
      </Flex>
      <Flex direction="column" align="end">
        <Flex
          direction={{
            '@initial': 'columnReverse',
            '@small-min': 'row',
          }}
          css={{
            alignSelf: 'flex-start',
            width: '100%',
            gap: 5,
            py: 10,
            px: 15,
            '@small-min': {
              px: 0,
              pl: 107,
              alignSelf: 'end',
            },
          }}
        >
          {/* <FilterChips
            market_filters={market_filters}
            toggleMarketFilter={toggleMarketFilter}
            removeMarketPriceFilter={() => {
              applyMarketPriceFilter()
            }}
            clearFilters={clearFilters}
          /> */}
          <Flex
            align="end"
            css={{
              width: '100%',
              alignSelf: 'end',
              justifyContent: 'space-between',
              marginLeft: 'auto',
              '@small-min': {
                py: 0,
                width: 'auto',
                justifyContent: 'end',
                pr: 50,
              },
            }}
          >
            <Button
              data-testid="mobile-sidebar"
              css={{
                '@small-min': {
                  display: 'none',
                },
                width: 42,
                height: 42,
              }}
              onClick={() => {
                // toggleMobileMarketplaceSidebar()
              }}
              variant="transparent"
              icon={<FiltersIcon />}
            />
            {/* <MarketSelect
              onChange={orderBy}
              default_value={market_filters.order_by || 'low_high'}
            /> */}
          </Flex>
        </Flex>
        <Flex
          css={{
            gap: 5,
            marginRight: 'auto',
            pb: 10,
            pl: 15,
            color: '$default-text-accentuate-color',
            '@small-min': {
              width: '100%',
              // pl: show_desktop_market_sidebar ? 401 : 107,
            },
          }}
        >
          {/* <TotalItemsText total={total_assets} /> */}
        </Flex>
        <Flex css={{ width: '100%' }}>
          {/* <DesktopMarketSidebar
            market_filters={market_filters}
            show_desktop_market_sidebar={show_desktop_market_sidebar}
            toggleDesktopMarketplaceSidebar={toggleDesktopMarketplaceSidebar}
            toggleMarketFilter={toggleMarketFilter}
            applyMarketPriceFilter={applyMarketPriceFilter}
          /> */}
          {/* <MobileMarketSidebar
            market_filters={market_filters}
            show_mobile_market_sidebar={show_mobile_market_sidebar}
            toggleMobileMarketplaceSidebar={toggleMobileMarketplaceSidebar}
            toggleMarketFilter={toggleMarketFilter}
            applyMarketPriceFilter={applyMarketPriceFilter}
            clearFilters={clearFilters}
          /> */}
          <Flex
            css={{
              width: 'inherit',
              px: 15,
              pb: '$large',
              '@small-min': {
                px: 50,
                pb: '$xx-large',
              },
            }}
          >
            {/* {total_assets > 0 ? (
              <AssetList columns="300-fill" assets={filtered_assets} />
            ) : (
              <NotResult />
            )} */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MarketPlacePage
