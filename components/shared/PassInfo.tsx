import { Card } from '~/components/primitives/Card'
import { Image } from '~/components/primitives/Image'
import { styled, theme } from '~/styles/stitches.config'

type Props = {
  title: string
  highlight?: 'title_small' | 'title_large_colored'
  description: string | Element
  actions: React.ReactNode
  image: string
  video?: string
}

const InfoGrid = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  columnGap: 60,
  pt: '$regular',
  mb: 46,
  '@regular-min': {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
})

const Title = styled('h1', {
  mb: 16,
  mt: 0,
  letterSpacing: '0.03em',
  lineHeight: 43,
  '@regular-min': {
    mb: 36,
    pt: '$regular',
  },
  variants: {
    highlight: {
      title_small: {
        fontSize: '1.5rem',
      },
      // TODO: Missing font text style?
      title_large_colored: {
        ...theme.typeStyles['chakra-petch-40'],
        fontSize: '2rem',
        color: '$pokemon-drop-text-accentuated',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        '@small-min': {
          ...theme.typeStyles['chakra-petch-40'],
        },
      },
    },
  },
})

const MainContent = styled(Card, {
  backgroundColor: 'transparent',
  color: '$descriptions-default-grey',
  flex: 1,
  py: 0,
  my: 0,
  '& p': {
    fontSize: '$chakra-petch-16',
  },
})

const InfoImage = styled(Image, {
  flex: 1,
  mb: '$large',
  maxWidth: 560,
  minWidth: 300,
  objectFit: 'contain',
  width: '100%',
  '@regular-min': {
    mb: 0,
  },
})

const MainText = styled('p', {
  fontSize: '$chakra-petch-16',
  mb: 36,
  mt: 0,
})

const Media = styled('video', {
  borderRadius: '$regular',
  flex: 1,
  mb: '$large',
  maxWidth: 560,
  minWidth: 300,
  objectFit: 'contain',
  width: '100%',
  '@regular-min': {
    mb: 0,
  },
})

export const PassInfo = ({ title, highlight, actions, description, image, video }: Props) => {
  return (
    <InfoGrid>
      {video ? (
        <Media src={video} preload="" autoPlay loop muted playsInline poster={image} />
      ) : (
        <InfoImage src={image} alt="Pass Info Image" />
      )}

      <MainContent>
        <Title highlight={highlight}>{title}</Title>
        <MainText>{description}</MainText>
        {actions}
      </MainContent>
    </InfoGrid>
  )
}
