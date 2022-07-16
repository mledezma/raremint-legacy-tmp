import { styled, theme } from '~/styles/stitches.config'
import { routes } from '~/library/routes'
import { MetamaskIcon, PaymentsIcon, WalletconnectIcon } from '../icons'
import { Box } from '~/components/primitives/Box'
import { Button } from '~/components/primitives/Button'
import { Flex } from '~/components/primitives/Flex'
import { Text } from '~/components/primitives/Text'
import { Link } from '~/components/primitives/Link'
import { useAuth } from '~/hooks/useAuth'

const WalletContainer = styled('div', {
  justifyContent: 'center',
  letterSpacing: '0.03em',
  px: '$regular',
  py: '$regular',
  maxWidth: 400,
  flexGrow: 1,
  h2: {
    ...theme.typeStyles['chakra-petch-18'],
    color: '$default-text-accentuate-color',
    textAlign: 'center',
  },
  p: {
    ...theme.typeStyles['chakra-petch-15'],
    color: '$overlay-dialogue-text',
  },
  '@small-min': {
    py: 0,
  },
})

const StyledBox = styled(Box, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$small',
})

export interface WalletConnectorProps {
  redirect_to?: string
  hide_title?: boolean
}

export const WalletConnector = ({ redirect_to, hide_title }: WalletConnectorProps) => {
  const { login } = useAuth()
  const redirect_to_value = redirect_to || '/'
  return (
    <WalletContainer>
      {!hide_title ? <h2>Connect your wallet.</h2> : null}
      <Text variant="flat">
        To sign back in, please connect to RareMint with one of our wallet providers. You can still
        browse our collectibles while signed out. By connecting your wallet, you agree to RareMint&apos;s{' '}
        <Link href={routes.terms}>
          Terms of Service
        </Link>
      </Text>
      <StyledBox>
        <Flex direction="column" css={{ py: '$regular', gap: '$regular', minWidth: 310 }}>
          <Button
            key="metamask-login-button"
            icon={<MetamaskIcon />}
            text="MetaMask"
            variant="secondary"
            onClick={() => login('metamask', redirect_to_value)}
          />
          <Button
            key="walletconnect-login-button"
            icon={<WalletconnectIcon />}
            text="WalletConnect"
            variant="primary"
            onClick={() => login('walletconnect', redirect_to_value)}
          />
        </Flex>
      </StyledBox>
      <StyledBox>
        <h3>Pay With:</h3>
        <PaymentsIcon />
      </StyledBox>
    </WalletContainer>
  )
}
