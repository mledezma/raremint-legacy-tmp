import { MainHeading, HeadingDescription, SubHeading } from '../pages/home/home-styles'
import type { StepsCardProps, StepCardVariants } from './types'
import { styled } from '~/styles/stitches.config'
import { Grid } from '../primitives/Grid'
import { Card } from '../primitives/Card'

const StyledStepCard = styled(Card, {
  pb: '$large',
  pt: '$small',
  px: '$large',
  '@small-min': {
    pt: '$x-small',
  },
  variants: {
    variant: {
      small_highlight: {
        '& h3': {
          color: '$pokemon-drop-text-accentuated',
          fontSize: 24,
        },
        '& p': {
          fontSize: 18
        }
      }
    }
  }
})

interface Props {
  title?: string
  cards_data: {
    title: string
    text: string
  }[]
  variant?: StepCardVariants
}

const StepCard = ({ title, text, variant }: StepsCardProps) => {
  return (
    <StyledStepCard css={{ minWidth: 'auto' }} variant={variant}>
      <SubHeading css={{ mb: '$small' }}>{title}</SubHeading>
      <HeadingDescription css={{ fontWeight: 500 }}>{text}</HeadingDescription>
    </StyledStepCard>
  )
}

export const StepsCard = ({ title, cards_data, variant }: Props) => {
  return (
    <>
      {title ? <MainHeading as="h2">{title}</MainHeading> : null}
      <Grid
        justify="center"
        columns={{ '@initial': 1 }}
        gap={{ '@small-min': 'large' }}
        css={{ '@small-min': { gridTemplateColumns: 'repeat(3, minmax(auto, 425px))' } }}
      >
        {cards_data.map((props) => (
          <StepCard key={props.title} variant={variant} {...props} />
        ))}
      </Grid>
    </>
  )
}
