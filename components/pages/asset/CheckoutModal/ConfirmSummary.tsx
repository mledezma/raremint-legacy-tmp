import { PurchaseDetailsTableDescStyled } from '~/components/shared/styled'
import { Flex } from '~/components/primitives/Flex'
import { ImageMedia } from '~/components/shared/ImageMedia'
import { PurchaseDetailsWrapper } from '~/components/shared/styled'
import { PurchaseDetailsTableTitleStyled } from '~/components/shared/styled'
import { Checkbox } from '~/components/primitives/Checkbox'
import { CheckboxIndicator } from '~/components/primitives/Checkbox'
import { Currency } from '~/components/shared/Currency'
import { CheckIcon, ETHIcon } from '~/components/icons'
import { ethToUsd } from '~/library/utils'
import { styled } from '~/styles/stitches.config'
import { Asset } from '~/types'

type ConfirmSummaryProps = {
  asset: Asset
  confirmed: boolean
  toggleConfirm: () => void
}

const TableBody = styled('tbody', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

const TableFooter = styled('tfoot', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  pt: '$regular',
  '@regular-min': {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    pt: 0,
  },
})

const TermsLink = styled('a', {
  color: '$default-text-accentuate-color',
  flex: 1,
  fontWeight: 700,
  textDecoration: 'none',
})

export const ConfirmSummary = ({ asset, confirmed, toggleConfirm }: ConfirmSummaryProps) => (
  <>
    <ImageMedia image={asset.image} width="240" height="240" />

    {/* TODO: Vanish Flex. Create Styled */}
    <PurchaseDetailsWrapper>
      <TableBody>
        <Flex as="tr" align="start" direction="column" justify="center">
          <PurchaseDetailsTableTitleStyled>Item:</PurchaseDetailsTableTitleStyled>
          <PurchaseDetailsTableDescStyled>{asset.name}</PurchaseDetailsTableDescStyled>
        </Flex>
        <Flex as="tr" align="start" direction="column" justify="center">
          <PurchaseDetailsTableTitleStyled>NFT Tier:</PurchaseDetailsTableTitleStyled>
          <PurchaseDetailsTableDescStyled>{asset.tier}</PurchaseDetailsTableDescStyled>
        </Flex>
      </TableBody>
      <TableFooter>
        <Flex as="tr" align="end" direction="column" justify="between">
          <PurchaseDetailsTableTitleStyled css={{ textAlign: 'right' }}>
            <strong>Subtotal:</strong>
          </PurchaseDetailsTableTitleStyled>
        </Flex>
        <tr />
        <Flex as="tr" align="end" direction="column" justify="between">
          <PurchaseDetailsTableDescStyled size="large">
            <ETHIcon />
            {`${asset.token_price} `}
            <span>ETH</span>
          </PurchaseDetailsTableDescStyled>
          <PurchaseDetailsTableDescStyled size="large">
            <Currency coin="usd" value={ethToUsd(asset.token_price?.toString())} /> <span>USD</span>
          </PurchaseDetailsTableDescStyled>
        </Flex>
      </TableFooter>
    </PurchaseDetailsWrapper>

    <Flex align="center" css={{ gap: '$xx-small', fontWeight: 700 }}>
      <Checkbox onClick={toggleConfirm} checked={confirmed}>
        <CheckboxIndicator style={{ display: 'flex' }}>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <span>I agree to RareMint{`'`}s </span>
      <TermsLink
        href={`${window.location.origin}/learn/terms-of-service`}
        target="_blank"
        rel="noreferrer"
      >
        Terms of Service
      </TermsLink>
    </Flex>
  </>
)
