import { styled } from '@stitches/react'
import { CloseIcon } from '../icons'
import { Button } from '../primitives/Button'
import { Flex } from '../primitives/Flex'

//
type FilterTagProps = {
  label: string
  handleRemove(): void
}

const FilterWrapper = styled(Flex, {
  height: 25,
  alignItems: 'center',
  backgroundColor: '#849FFF', // TODO: add to toolabs
  minWidth: 'fit-content',
  padding: '10px 0px 10px 10px',
  borderRadius: 3,
  color: '$black',
  gap: 5,
})

const FilterTagItem = ({ label, handleRemove }: FilterTagProps) => {
  return (
    <FilterWrapper align="center">
      <p>{label}</p>
      <Button css={{ height: 25, px: 5 }} icon={<CloseIcon />} onClick={handleRemove} />
    </FilterWrapper>
  )
}

export default FilterTagItem
