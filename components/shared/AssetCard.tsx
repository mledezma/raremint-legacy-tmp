import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router';
import _ from 'lodash'
import type { Asset } from '~/types'
import { Text } from '../primitives/Text'
import { Image } from '../primitives/Image'
import { Flex } from '../primitives/Flex'
import { Box } from '../primitives/Box'
import { routes } from '~/library/routes'
import { ethToUsd } from '~/library/utils'
import { styled, theme } from '~/styles/stitches.config'
import { EmptyHeartIcon, ETHIcon, HeartIcon, RaremintAssetIcon, PolygonIcon } from '~/components/icons'
import { Currency } from './Currency'
import { useAssetFav } from '~/hooks/useAssetFav'
import { useStore } from '~/store'
import { AssetCardStatusStyled } from '~/components/shared/styled'
import { getCloudinaryAssetImage } from '~/services/cloudinary'

type AssetCardProps = {
  asset: Asset
  is_inventory?: boolean
}

const StyledAssertCard = styled('div', {
  borderRadius: '$regular',
  background: '$overlay-bg-color',
  backgroundColor: '$card-bg-dark-grey',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'fit-content',
})

type HeaderLabelProps = {
  chain?: string
}

const LimitedEditionLabel = ({ chain }: HeaderLabelProps) => (
  <Flex>
    {chain === 'polygon' ? <PolygonIcon /> : <ETHIcon fill={theme.colors['marketplace-text']} />}
    <Text
      css={{
        fontWeight: 400,
        fontSize: 12,
      }}
      variant="asset"
    >
      Limited Edition
    </Text>
  </Flex>
)

const UltraRareLabel = ({ chain }: HeaderLabelProps) => (
  <Flex>
    {chain === 'polygon' ? <PolygonIcon /> : <ETHIcon fill={theme.colors['marketplace-text']} />}
    <Text
      css={{
        fontWeight: 400,
        fontSize: 12,
      }}
      variant="asset"
    >
      Ultra Rare
    </Text>
  </Flex>
)

type LikesProps = { asset: Asset; setAsset: (asset: Asset) => void }
const Likes = ({ asset, setAsset }: LikesProps) => {
  const useFav = useAssetFav()
  return (
    <Flex justify="end">
      <Flex align="center" justify="center">
        <Box
          onClick={() => {
            setAsset(useFav.toggleAsset(asset))
          }}
          css={{ cursor: 'pointer' }}
        >
          {asset.user_fav ? <HeartIcon /> : <EmptyHeartIcon />}
        </Box>
        {asset.total_likes > 0 ? (
          <Text
            variant="asset"
            css={{ color: asset.user_fav ? '$like' : '$marketplace-text', minWidth: 25 }}
          >
            {asset.total_likes > 0 ? asset.total_likes : ' '}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  )
}

const HeaderAsset = styled(Flex, {
  alignItems: 'center',
  px: '$x-small',
  width: '100%',
  height: 52,
  justifyContent: 'between',
  '> div': {
    width: '100%',
    alignItems: 'center',
  },
})

const Price = styled(Text, {
  fontWeight: '700 !important',
  fontSize: '16px !important',
  margin: 0,
  '& span': {
    fontSize: 10,
  },
})

const AssetCardFooter = ({ asset, is_inventory }: AssetCardProps) => {
  const is_processing = asset.owner_of === useStore().user?.address && asset.pending
  const box_message = is_processing ? 'Processing' : asset.sold_out ? 'SOLD' : ''
  return (
    <Flex justify="between" align="center">
      {is_inventory || asset.user_owned ? (
        <Flex direction="column" css={{ width: '100%' }}>
          <Box css={{ height: 62 }}>
            <Text variant="asset" css={{ fontSize: 13, fontWeight: 600, px: 0 }}>
              {asset.name}
            </Text>
          </Box>
          <AssetCardStatusStyled state="acquired_asset_card">My Asset</AssetCardStatusStyled>
        </Flex>
      ) : box_message ? (
        <AssetCardStatusStyled state="sold" size="asset_card">
          {box_message}
        </AssetCardStatusStyled>
      ) : (
        <Flex direction="column" css={{ width: '100%' }}>
          <Box css={{ height: 62 }}>
            <Text variant="asset" css={{ fontSize: 13, fontWeight: 600, px: 0 }}>
              {asset.name}
            </Text>
          </Box>
          <Flex justify="between">
            <Box css={{ gap: '$xxx-small', display: 'flex', color: '$seafoam' }}>
              <ETHIcon fill={theme.colors.seafoam} />
              <Price variant="flat">
                {asset.token_price} <span>{' ETH'}</span>
              </Price>
            </Box>
            <Flex justify="between">
              <Price css={{ color: '$marketplace-usd-color', px: 0 }}>
                <Currency coin="usd" value={ethToUsd(asset.token_price.toString())} />
                <span>{' USD'}</span>
              </Price>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export const AssetCard = ({ asset, is_inventory }: AssetCardProps) => {
  // Get Next router.
  const router = useRouter();

  const asset_image = useMemo(() => getCloudinaryAssetImage(asset) || asset.image, [asset])
  const [optimistic_asset, setOptimisticAsset] = React.useState<Asset>(asset)
  const is_galaxy_pass = asset.name === 'Galaxy Pass'
  const asset_link = is_galaxy_pass ? routes.pass : `${routes.asset}/${asset.asset_uri}`

  return (
    <StyledAssertCard>
      <HeaderAsset>
        {asset.tier === 'Ultra Rare' ? <UltraRareLabel /> : <LimitedEditionLabel />}
        <Flex justify="center" css={{ maxWidth: 36 }}>
          <RaremintAssetIcon />
        </Flex>
        <Likes asset={optimistic_asset} setAsset={setOptimisticAsset} />
      </HeaderAsset>
      <Flex
        justify="center"
        align="center"
        css={{ cursor: 'pointer' }}
        onClick={() => router.push(asset_link)}
      >
        <Image variant="asset" src={asset_image} alt="Asset Image"/>
      </Flex>
      <Flex
        justify="end"
        direction="column"
        css={{ px: '$small', width: '100%', height: 83, mb: 12 }}
      >
        <AssetCardFooter asset={asset} is_inventory={is_inventory} />
      </Flex>
    </StyledAssertCard>
  )
}
