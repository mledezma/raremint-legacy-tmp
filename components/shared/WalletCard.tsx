import { styled, theme } from '~/styles/stitches.config'
import { Box } from '~/components/primitives/Box'
import { Flex } from '~/components/primitives/Flex'
import { StyledBaseButton } from '~/components/primitives/Button'
import { Modal } from '~/components/shared/Modal'
import { Tooltip } from '~/components/shared/Tooltip'
import { Text } from '~/components/primitives/Text'
import { CheckIcon, CopyIcon, ETHIcon } from '../icons'
import {
  ethToUsd,
  formatShortAddress,
  formatTokenPriceString,
  copyToClipboard,
} from '~/library/utils'
import Decimal from 'decimal.js'
import { Currency } from './Currency'
import { MoonPayWidget } from '../pages/asset/MoonPayWidget'
import React, { useEffect, useState } from 'react'
import { PlusIcon } from '../icons/PlusIcon'
import { useSetState, useToggle } from 'react-use'
import { useStore } from '~/store'
// import { getWalletData, syncBalance } from '~/session/wallet.client' //ToDo: fix this

type WalletProps = {
  open?: boolean
  address: string
  eth_balance: Decimal
}

type ButtonProps = {
  leftIcon?: React.ReactNode
  text?: string
  rightIcon?: React.ReactNode
}

const StyledButton = styled(StyledBaseButton, {
  width: 310,
})

const CopyAddressWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '$x-small',
})

export const WalletButton = ({
  leftIcon,
  text,
  rightIcon,
  ...props
}: ButtonProps & React.ComponentProps<typeof StyledBaseButton>) => {
  return (
    <StyledButton {...props}>
      {leftIcon}
      {text && <span>{text}</span>}
      {rightIcon}
    </StyledButton>
  )
}

const wallet_card_styles = {
  m: '$x-large',
  fontWeight: 'bold',
  letterSpacing: '0.03em',
  hr: {
    height: 1,
    width: '100%',
    border: 'none',
    bg: '$submenu-item-divider-line',
  },
  '@small-min': {
    m: '0 $x-large $x-large',
  },
}

export const WalletCard = () => {
  const { user, active_nav_key } = useStore()
  const [buy_eth, setBuyEth] = useState(false)
  const [showTooltip, toggleTooltip] = useToggle(false)
  const [walletData, setWalletData] = useSetState({
    address: user?.address || '',
    eth_balance: user?.eth_balance || '',
  })

  const copyWalletAddress = () => {
    copyToClipboard(walletData.address)
    toggleTooltip()

    const timeout = setTimeout(() => {
      toggleTooltip(false)
      clearTimeout(timeout)
    }, 2000)
  }

  const updateWalletBalance = async () => {
    // ToDo: fix this
    // const walletData = await getWalletData()
    // if (walletData) {
    //   setWalletData(walletData)
    //   await syncBalance(walletData)
    // }
  }

  // TODO: useAsync Ruben
  // https://stackoverflow.com/questions/56450975/to-fix-cancel-all-subscriptions-and-asynchronous-tasks-in-a-useeffect-cleanup-f
  useEffect(() => {
    if (active_nav_key === 'wallet') {
      updateWalletBalance().catch(console.error)
    }
  }, [active_nav_key])

  return (
    <>
      <Flex direction="column" css={wallet_card_styles}>
        <Flex justify="center" align="center" css={{ gap: '$x-small' }}>
          <Text variant="navBar">Wallet Connected!</Text>
          <CheckIcon />
        </Flex>
        <hr />
        <Flex align="center" justify="between">
          <Text variant="flat">My Wallet:</Text>
          <CopyAddressWrapper css={{ gap: '$x-small' }} onClick={copyWalletAddress}>
            {showTooltip ? <Tooltip children={<>Copied Address!</>} /> : null}
            <Text variant="navBar">{formatShortAddress(walletData.address)}</Text>
            <CopyIcon
              color={theme.colors['text-links-and-metadata-panel-contract-address-link-text-color']}
            />
          </CopyAddressWrapper>
        </Flex>
        <Text variant="flat">Signed In.</Text>
        <Text variant="flat" css={{ fontWeight: 400 }}>
          Thanks for signing in. You can add ETH to your wallet here at any time.
        </Text>
        <Flex direction="column">
          <Box css={{ pt: '$large', pb: '$regular' }}>
            <Flex direction="row">
              <Box
                css={{
                  flexGrow: 1,
                }}
              >
                <ETHIcon /> <b>ETH</b>
              </Box>
              <Box>
                <ETHIcon /> <b>{formatTokenPriceString(walletData.eth_balance)}</b>
                <small> ETH</small>
              </Box>
            </Flex>
            <Flex direction="row">
              <Box
                css={{
                  flexGrow: 1,
                }}
              >
                <span>Ethereum</span>
              </Box>
              <span>
                <Currency coin="usd" value={ethToUsd(walletData.eth_balance)} />
                <small> USD</small>
              </span>
            </Flex>
          </Box>
          <Flex justify="center" align="center">
            <WalletButton
              variant="secondary"
              onClick={() => setBuyEth(true)}
              text="Buy ETH"
              leftIcon={<ETHIcon />}
              rightIcon={<PlusIcon />}
            />
          </Flex>
        </Flex>
      </Flex>
      <>
        {buy_eth && (
          <Modal
            show={buy_eth}
            handleClose={() => {
              setBuyEth(false)
            }}
            modalType="full_height"
          >
            <Flex direction="column" css={{ height: '100vh', width: '100%' }}>
              <MoonPayWidget
                onClose={() => {
                  setBuyEth(false)
                }}
              />
            </Flex>
          </Modal>
        )}
      </>
    </>
  )
}
