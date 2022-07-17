
// import type { LoaderFunction } from '@remix-run/node'
// import { json } from '@remix-run/node'
import type { Asset } from '~/types'
// import { useLoaderData } from '@remix-run/react'
import { Container } from '~/components/primitives/Container'
import { Flex } from '~/components/primitives/Flex'
import { Button } from '~/components/primitives/Button'
import { Input } from '~/components/primitives/Input'
import { getAssetsLimitedEdition } from '~/services/prisma.server'
import { useToggle } from 'react-use'
import { CheckoutModal } from '~/components/pages/asset/CheckoutModal'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'
import { PassInfo } from '~/components/shared/PassInfo'
import { StyledDropsCounter } from '~/components/shared/styled'
import { InfoActionsSubtitleStyled } from '~/components/shared/styled'
import { StyledAmountTextContainer } from '~/components/shared/styled'
import { StyledAmountText } from '~/components/shared/styled'
import { BodyItemWrapper } from '~/components/shared/styled'
import { BodyItemTitleStyled } from '~/components/shared/styled'
import { BodyItemDescriptionStyled } from '~/components/shared/styled'
import { StepsCard } from '~/components/shared/StepsCard'
import { PolygonIcon } from '~/components/icons/PolygonIcon'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { ETHIcon } from '~/components/icons'
import { routes } from '~/library/routes'

const steps_data = [
  {
    title: 'Mint',
    text: 'Each Polygon minted Mystery Pack contains one Pokemon Card NFT. You own the Pokemon Card in the digital world and in the physical world. The physical card is safe in our secure vault. Vaulting is free. Redeem anytime.',
  },
  {
    title: 'Rip',
    text: 'Mystery Packs will be available for reveal 72 hours after the drop begins. You can open it right away or keep it sealed. Your Pokemon Card NFT will be immediately available on OpenSea and in your RareMint inventory.',
  },
  {
    title: 'Collect or sell',
    text: 'Build your collection or look to OpenSea to sell on the secondary market. This is the first digital drop of the Slab Series. Look out for more Pokemon, sports trading cards, and more coming soon.',
  },
]
const additional_data = [
  // {
  //   title: 'Prepare for the Drop',
  //   text: 'You will need to have these kinds of tokens. Make sure you are connected to the Polygon network etc.',
  // },
  {
    title: 'Blockchain',
    text: 'Polygon',
  },
  {
    title: 'Stats',
    text: (
      <ul>
        <li>Total Mystery Packs: 200</li>
        <li>Price Per Pack: $335</li>
        <li>Ceiling: $28,800</li>
        <li>Avg: $335</li>
        <li>Floor: $50</li>
        <li>No Card Grade under a: 7</li>
        <li>Will a list of all cards be published: Yes (coming soon)</li>
      </ul>
    ),
  },
  {
    title: 'Grading Companies',
    text: (
      <ul>
        <li>CGC</li>
        <li>PSA</li>
        <li>BGS</li>
      </ul>
    ),
  },
  {
    title: 'Sample Cards',
    text: (
      <ul>
        <li>1999 Pokemon 1st Edition Charizard Holo PSA 9 (Value: $28,800)</li>
        <li>1999 Pokemon 1st Edition Holo Charizard PSA 7</li>
        <li>1999 Pokemon Shadowless Holo R Charizard BGS 8.5</li>
        <li>2002 Pokemon Legendary Rev.Foil Charmeleon PSA 10</li>
        <li>1998 PM Japanese Starter Holo Articuno PSA 10</li>
        <li>2002 Pokemon Legendary Collection Rev Holo Pikachu CGC 9.5</li>
      </ul>
    ),
  },
  {
    title: 'NFT',
    text: 'ERC-721',
  },
  {
    title: 'Asset-Backed',
    text: 'Yes',
  },
  {
    title: 'Physical Asset Storage',
    text: 'RareMint Vault',
  },
  {
    title: 'Physical Assets Insured',
    text: 'Yes',
  },
  {
    title: 'How we Source and Store the Cards',
    text: (
      <>
        <p>
          RareMint has access to hundreds of millions in sports collectibles, trading cards,
          Pokemon, and much more. All RareMint 1 of 1 NFTs are stored in our highly secure vault.
          Vaulted assets are protected by armed security guards, state of the art security systems,
          and the vault area exceeds the U.S. Bank Protection Act Specifications. With a steel vault
          door weighing 6,000 pounds and steel reinforced walls and floor that are 12-inches thick,
          the vault facility is embedded in the earth and surrounded by steel, concrete and rock.
          The temperature, humidity, and lighting is consistent to ensure your assets remain in the
          same condition as when received.
        </p>

        <p>
          Storage and insurance for the asset is factored into the price of the initial sale and a
          contribution is made from royalties earned on secondary sales to support ongoing costs.
          RareMint practices the highest standard of care to maintain, monitor, and manage the
          continued value appreciation. Through asset-backed NFT, we enable respectful enjoyment and
          utilization by the owners while safely stored with us.
        </p>
      </>
    ),
  },
  // {
  //   title: 'How to set up Polygon Network via MetaMask',
  //   text: 'You will need to have these kinds of tokens. Make sure you are connected to the Polygon network etc. You will need to have these kinds of tokens. Make sure you are connected to the Polygon network etc.',
  // },
]

// ToDo: Review the loader function.
// export const loader: LoaderFunction = async () => {
//   const asset = await getAssetsLimitedEdition(
//     'Pokemon Wrapped Ultra Rare Asset with Generic Metadata',
//   )

//   if (!asset) throw new Error('Asset not Found')

//   return json({
//     asset,
//   })
// }

type AssetDetailLoaderData = {
  asset: Asset
  limited_edition_assets: Asset[]
}

const SignUpForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const SignUp = () => {
  const { build_flags } = useStore()

  return (
    <SignUpForm
      action={`${build_flags.services.mailchimp_url}/subscribe/post`}
      method="POST"
      target="_blank"
    >
      <Flex
        direction={{ '@initial': 'column', '@regular-min': 'row' }}
        align={{ '@regular-min': 'center' }}
        css={{ gap: '$regular' }}
      >
        <input type="hidden" name="u" value="baa76e2edc5762cf8cea39e1f" />
        <input type="hidden" name="id" value="bded0f7d78" />
        <Input
          type="email"
          name="MERGE0"
          id="MERGE0"
          variant="footer_subscribe"
          css={{
            flex: 1,
            height: 50,
            '@small-min': {
              minWidth: 280,
            },
          }}
        />
        <Flex css={{ width: 240 }}>
          <Button type="submit" variant="secondary" size="large" text="Remind Me" />
        </Flex>
      </Flex>
    </SignUpForm>
  )
}

export default function Drops() {
  // ToDo: Add the loader functionality.
  // const { asset } = useLoaderData<AssetDetailLoaderData>()
  // const [show_checkout, toggleCheckout] = useToggle(false)
  // const navigate = useNavigate()
  // const [drops_quantity, setDropsQuantity] = useState('000')

  // const initNFTPurchase = async () => {
  //   if (!(window as any).ethereum) return navigate(routes.signin)
  //   toggleCheckout()
  // }

  const Actions = (
    <Flex direction="column" align="center" css={{ rowGap: '$regular' }}>
      <Flex direction="column" align="center">
        <Flex>
          <Button
            variant="transparent"
            // onClick={() => setDropsQuantity(`${parseInt(drops_quantity) - 1}`)}
            icon={<FiMinusCircle size={38} color="var(--colors-pokemon-drop-text-accentuated)" />}
          />
          <StyledDropsCounter
            format="###"
            placeholder="000"
            inputMode="numeric"
            // value={drops_quantity}
            // onValueChange={(values) => setDropsQuantity(values.formattedValue)}
            isNumericString
          />
          <Button
            variant="transparent"
            // onClick={() => setDropsQuantity(`${parseInt(drops_quantity) + 1}`)}
            icon={<FiPlusCircle size={38} color="var(--colors-pokemon-drop-text-accentuated)" />}
          />
        </Flex>
        <InfoActionsSubtitleStyled>
          001/969 <span>Minted</span>
        </InfoActionsSubtitleStyled>
        <StyledAmountTextContainer as="p">
          Subtotal:{' '}
          <StyledAmountText>
            <ETHIcon /> 0.086
            <span>ETH</span>
          </StyledAmountText>
          <StyledAmountText>
            {/* <ETHIcon /> {parseFloat(`${0.086 * parseInt(drops_quantity ?? 0, 10)}`).toFixed(4)} */}
            <span>ETH</span>
          </StyledAmountText>
        </StyledAmountTextContainer>
      </Flex>
      <Flex css={{ width: 240 }}>
        {/* <Button onClick={initNFTPurchase} variant="secondary" size="large" text="Mint Now" /> */}
      </Flex>
    </Flex>
  )

  return (
    <>
      {/* TODO !important: change this layout to the one in router/pass */}
      {/* TODO: Review the rehidratation error. */}
      <Container css={{ mb: '$xx-large', '@regular-min': { px: '$x-large' } }} max="large">
        <PassInfo
          title={`Feeling Lucky? Rip open a $28,800 Charizard.`}
          highlight="title_large_colored"
          description={
            <>
              <p>
                The RareMint Slab Series will launch its initial digital break with Pokemon. The
                drop contains 200 Pokemon Mystery Packs that each contain a 1 of 1 Pokemon Card NFT.
                The NFT can be redeemed anytime for the physical version stored in our secure vault.
                The drop contains some amazing cards including a rare 1999 Charizard Holo 1st
                Edition PSA 9 worth over $28,000 (One just sold at Goldin Auctions on 5/21/22 for
                $28,800).
              </p>
              <p>
                The Pokemon Card NFTs can be redeemed for the physical version anytime. The physical
                cards are insured, safe and secure. Vaulting is free. If you ever want the physical
                card, RareMint can send it to you and the NFT will be burned.
              </p>
            </>
          }
          actions={<SignUp />}
          image="https://res.cloudinary.com/raremint/image/upload/v1655508649/application_assets/mystery-pack-10_jjxgg9.png"
        />
        <StepsCard cards_data={steps_data} variant="small_highlight" />
      </Container>
      <Container css={{ pb: '$xx-large' }} max="medium">
        <Flex
          as="section"
          css={{ width: '100%' }}
          direction={{ '@initial': 'column', '@small-min': 'row' }}
        >
          <Flex
            css={{ width: '100%', display: 'flex', '@small-min': { display: 'none' } }}
            align="start"
            justify="center"
          >
            <PolygonIcon />
          </Flex>
          <Flex as="ul" css={{ width: '100%', maxWidth: 650, px: 0 }} direction="column">
            {additional_data.map((data: any) => (
              <BodyItemWrapper key={data.title}>
                <BodyItemTitleStyled>{data.title}</BodyItemTitleStyled>
                <BodyItemDescriptionStyled>{data.text}</BodyItemDescriptionStyled>
              </BodyItemWrapper>
            ))}
          </Flex>
          <Flex
            css={{
              width: '100%',
              maxWidth: 424,
              display: 'none',
              '@small-min': { display: 'flex' },
            }}
            align="start"
            justify="center"
          >
            <PolygonIcon />
          </Flex>
        </Flex>
      </Container>
      {/* <CheckoutModal show={show_checkout} onClose={toggleCheckout} asset={asset} /> */}
    </>
  )
}
