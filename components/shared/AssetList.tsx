import { AssetCard } from '~/components/shared/AssetCard'
import type { Asset } from '~/types'
import { StyledComponentProps } from '@stitches/react/types/styled-component'
import { styled } from '~/styles/stitches.config'

export interface AssetListProps extends StyledComponentProps<any> {
  title?: string
  assets: Asset[]
  is_inventory?: boolean
  page?: 'marketplace' | 'homepage'
}

const AssetListTitle = styled('div', { justifyContent: 'center' })

const AssetListGrid = styled('div', {
  display: 'grid',
  width: '100%',
  gridGap: '$regular',
  gridTemplateColumns: '1fr',
  variants: {
    page: {
      marketplace: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      homepage: {
        '@media (min-width: 520px)': {
          gridTemplateColumns: 'repeat(auto-fit, 285px)',
        },
      },
    },
  },
  defaultVariants: {
    page: 'marketplace',
  },
})

export const AssetList = ({ title, assets, is_inventory, page }: AssetListProps) => {
  return (
    <>
      <AssetListTitle>{title ? <h2>{title}</h2> : null}</AssetListTitle>
      <AssetListGrid page={page || 'marketplace'}>
        {assets.map((asset) => (
          <AssetCard asset={asset} key={asset.asset_uri} is_inventory={is_inventory} />
        ))}
      </AssetListGrid>
    </>
  )
}
