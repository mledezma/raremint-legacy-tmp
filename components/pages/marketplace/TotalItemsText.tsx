import { Text } from '~/components/primitives/Text'

type TotalItemsTextProps = {
  total?: number
}
export const TotalItemsText = ({ total = 0 }: TotalItemsTextProps) => (
  <>
    <Text variant="flat">Showing</Text>{' '}
    <Text variant="flat" css={{ fontWeight: '$bold' }}>
      {total}
    </Text>{' '}
    <Text variant="flat">{total !== 1 ? 'Items' : 'Item'}</Text>
  </>
)
