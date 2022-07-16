import * as Accordion from '@radix-ui/react-accordion'
import { styled, keyframes } from '~/styles/stitches.config'
import { Container } from '~/components/primitives/Container'
import { Text } from '~/components/primitives/Text'
import { Breadcrumb } from '~/components/shared/Breadcrumb'
import { BottomArrowIcon } from '~/components/icons'

type FAQ_Type = {
  question: string
  answer: string
}

const FAQ_DATA = [
  {
    question: 'What is a RareMint asset backed NFT?',
    answer:
      'A Non-Fungible Token (NFT) is a unit of data stored on the blockchain. It certifies a digital asset to be unique and therefore not interchangeable. A RareMint asset-backed NFT is a NFT that is connected to it’s corresponding real world, physical asset stored in our vault. We call them Ultra Rare NFTs.',
  },
  {
    question: 'How do you determine the value of an asset-backed NFT?',
    answer:
      'RareMint assets are priced using a proprietary formula including current market value, historical significance, authenticity, assumed future royalties, social velocity, and growth trends of specific assets and the market. With over 50 years of experience, trading more than $500M in assets, we bring a best in class expertise to collectibles ownership.',
  },
  {
    question: 'What is the difference between asset types?',
    answer:
      'Ultra Rare: 1/1 NFT with exclusive provenance connected to its real world, physical asset plus ownership of that asset. No more than 1 minted. Limited Edition: RareMint Limited Edition NFTs refer to the authentic, experiential tour of the corresponding 1/1 physical item. For avoidance of doubt, RareMint Limited Edition NFTs have no ownership of the corresponding 1/1 physical item.',
  },
  {
    question: 'How do I get a wallet?',
    answer:
      'In order to purchase a RareMint NFT you will need an ERC-721 compatible wallet. You can go to MetaMask https://metamask.io or any other ERC-721 compatible wallet. When setting up your wallet make sure you write down the security phrase as no one at RareMint, or MetaMask can access your account if your password is lost. ',
  },
  {
    question: 'What types of payments do you accept?',
    answer:
      'We accept Visa, Mastercard, and ETH. We will accept our native token (MINTS) when it launches.',
  },
  {
    question: 'Where does the asset go once I purchase?',
    answer:
      'Once you have executed the purchase transaction using either crypto or fiat currency, and once the verification process is complete, the NFT will be securely delivered to the wallet address you provided. If the NFT is an Ultra Rare, the physical collectible is stored in our Vault.',
  },
  {
    question: 'Where can I see purchase history for an NFT?',
    answer:
      'All transactions are recorded on the Ethereum blockchain. A full transaction history can be found on etherscan.io.',
  },
  {
    question: 'What happens to the ownership of the physical asset if I sell my Ultra Rare NFT? ',
    answer:
      'Ownership of the physical asset is tied to the owner of the 1/1 Ultra Rare NFT. Whoever retains ownership of the NFT, owns the physical good. Similar to a property deed, assets can be sold and the buyer owns the NFT, which is the proof of ownership for the physical collectible asset.',
  },
  {
    question: 'How do I retrieve my physical item from the vault? ',
    answer:
      'RareMint provides an easy way for you to retrieve your physical asset from our vault. At any time, the Ultra Rare NFT owner can take possession of their physical item through our <a href="mailto:support@raremint.com" style="text-decoration: underline">redemption process</a> by contacting RareMint. The Ultra Rare NFT is returned to RareMint and the item is transferred to the owner pursuant to secure validated procedures. All Ultra Rare NFT’s are surrendered to RareMint on redemption as the NFT is no longer considered connected to the physical asset when outside the RareMint ecosystem.',
  },
  {
    question: 'How secure is you vault?',
    answer:
      'Our vault meets the highest standards in a secure building, with all assets locked away safely. Security personnel are on site monitoring the premises, in addition to cameras capturing all square footage and angles of the building. Motion detectors, access controls, and inventory controls provide further security to protect your assets from theft. Our facilities are temperature, light, and pest controlled, as well as fire protected.',
  },
  {
    question: 'Are vaulted assets insured?',
    answer: 'Yes. All assets in the vault are insured by our contracted insurance company.',
  },
  {
    question: 'How do I know you have the actual physical asset?',
    answer:
      'RareMint provides a Letter of NFT Authenticity describing how the assets was initially created including photos. RareMint also conducts a quarterly 3rd party audit of our vault to demonstrate all assets are present and accounted for in the vault.',
  },
  {
    question: 'How do you authenticate physical assets?',
    answer:
      'All assets are authenticated by industry standard service providers such as PSA, JSA, or Beckett. Our expert team also inspects the asset authenticity for further due diligence. Some assets include multiple authentication pieces, photo matching, and letters of provenance. Images of Certificate of Authenticity are available for preview and fully accessible on the platform for the asset owner. RareMint also includes a letter of NFT Authenticity. All physical certificates are safely stored with the physical asset in our vault.',
  },
  {
    question: 'Does RareMint have a token?',
    answer:
      'The MINTS token is our native token powering the RareMint ecosystem into the future of collectibles on the blockchain. Check back soon for more details.',
  },
]

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledAccordian = styled(Accordion.Root, {
  marginBottom: '$xx-large',
})

const StyledAccordianItem = styled(Accordion.Item, {
  backgroundColor: '$overlay-bg-color',
  borderRadius: '$regular',
  marginBottom: '$regular',
  borderBottom: 0,
})

const StyledAccordianHeader = styled(Accordion.Header, {
  margin: 0,
})

const StyledAccordianTrigger = styled(Accordion.Trigger, {
  background: 'none',
  border: 0,
  py: '$regular',
  pl: '$regular',
  pr: 60,
  color: 'white',
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '$regular',
  position: 'relative',

  svg: {
    position: 'absolute',
    height: 15,
    width: 28,
    right: '$regular',
    top: 0,
    bottom: 0,
    margin: 'auto',
    transition: 'transform 300ms',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
})

const StyledAccordianContent = styled(Accordion.Content, {
  color: 'white',
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out forwards` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out forwards` },
  '& a': {
    color: '$text-links-and-metadata-panel-contract-address-link-text-color',
  },
})

const H1 = styled('h1', {
  fontSize: 32,
  mt: '$x-large',
  color: 'white',
})

export const FAQ = () => {
  return (
    <Container>
      <Breadcrumb path={[{ url: '/', label: 'Home' }, { label: 'FAQ' }]} />
      <H1>FAQ</H1>
      <StyledAccordian type="single" defaultValue={`faqItem-${0}`} collapsible>
        {FAQ_DATA.length > 0 &&
          FAQ_DATA?.map((faqItem: FAQ_Type, index: number) => (
            <StyledAccordianItem value={`faqItem-${index}`} key={`faqItem-${index}`}>
              <StyledAccordianHeader>
                <StyledAccordianTrigger>
                  {faqItem.question} <BottomArrowIcon fill="#ffd775" />
                </StyledAccordianTrigger>
              </StyledAccordianHeader>
              <StyledAccordianContent>
                <Text
                  css={{ padding: '$regular', m: 0 }}
                  dangerouslySetInnerHTML={{ __html: faqItem.answer }}
                ></Text>
              </StyledAccordianContent>
            </StyledAccordianItem>
          ))}
      </StyledAccordian>
    </Container>
  )
}
