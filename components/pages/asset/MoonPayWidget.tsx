import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { CloseIcon, MoonPayIcon } from '~/components/icons'
import { Box } from '~/components/primitives/Box'
import { Button } from '~/components/primitives/Button'
import { Flex } from '~/components/primitives/Flex'
import { Text } from '~/components/primitives/Text'
import { useStore } from '~/store'

type MoonPayProps = {
  onClose(): void
}

type MoonTitleProps = {
  onClose(): void
}

const MoonPayTitle = ({ onClose }: MoonTitleProps) => (
  <Flex justify="center">
    <Text css={{ fontSize: 18, color: '$black', textAlign: 'center', width: '100%' }}>
      Continue Checkout
    </Text>
    <Button
      css={{ marginLeft: 'auto' }}
      icon={<CloseIcon width={16} height={16} />}
      onClick={onClose}
      variant="transparent"
    />
  </Flex>
)

export const MoonPayWidget = ({ onClose }: MoonPayProps) => {
  const { user, build_flags } = useStore()
  const [signedURL, setSignedURL] = useState<string>()

  const getMoonpaySignedURL = (params: any): Promise<any> => {
    const base = `${build_flags.services.raremint_api_url}/moonpay_sig`
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(params),
    }
    return new Promise((resolve) => {
      fetch(base, options)
        .then((response) => response.text())
        .then((data) => {
          resolve(data)
        })
    })
  }

  const getSignedURL = async () => {
    if (!user) return
    let signedUrl = ''
    if (build_flags.environment === 'local') {
      signedUrl = build_flags.services.raremint_api_url
    } else {
      signedUrl = await getMoonpaySignedURL({
        currencyCode: build_flags.services.moonpay_currency_code || '',
        walletAddress: user.address || '',
        colorCode: '%2304afba',
        baseCurrencyCode: 'usd',
        externalCustomerId: user.address || '',
      })
    }
    setSignedURL(signedUrl)
  }

  useEffectOnce(() => {
    getSignedURL()
  })

  return (
    <Flex css={{ height: '100%' }} direction="column">
      <Box css={{ height: '100%', pt: '$small' }}>
        <MoonPayTitle onClose={onClose} />
        {signedURL && (
          <iframe
            title="moonpay-widget"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            frameBorder="0"
            height="70%"
            src={signedURL}
            width="100%"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        )}
        <Flex align="center" justify="center" css={{ pt: 32 }}>
          <MoonPayIcon />
        </Flex>
      </Box>
    </Flex>
  )
}
