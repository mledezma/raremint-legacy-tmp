import { Box } from '~/components/primitives/Box'
import { Flex } from '~/components/primitives/Flex'
import { Text } from '~/components/primitives/Text'
import { styled } from '~/styles/stitches.config'

const default_message =
  'No items found matching your search criteria. New items drop weekly, so check back later!'

type TotalItemsTextProps = {
  text?: string
}

const MessageBox = styled(Box, {
  bg: '$overlay-bg-color',
  borderRadius: '$small',
  maxWidth: 618,
  maxHeight: 178,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$chakra-petch-16',

  '@small-min': {
    px: '$large',
    py: '$regular',
  },
})

export const NotResult = ({ text = default_message }: TotalItemsTextProps) => (
  <Flex align="center" justify="center" data-testid="NotResultComponent" css={{ width: '100%' }}>
    <MessageBox>
      <Text>{text}</Text>
    </MessageBox>
  </Flex>
)
