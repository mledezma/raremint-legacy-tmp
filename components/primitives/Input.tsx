import { styled } from '~/styles/stitches.config'

export const Input = styled('input', {
  boxSizing: 'border-box',
  borderRadius: '8px',
  display: 'flex',
  px: '$regular',
  py: '$small',
  '@large-min': {
    px: '$regular',
    py: '$small',
  },
  variants: {
    variant: {
      global_search: {
        bg: 'black',
        border: 'none',
        fontSize: '$text-xs',
        pl: 42,
        width: '31.25rem',
        height: 44,
        color: '#C5C5C5',
      },
      footer_subscribe: {
        bg: '#FDFDFD',
        borderRadius: '5px',
        fontSize: '$regular',
        py: '10px',
        px: '$regular',
      },
      marker_filter: {
        all: 'unset',
        color: '$marketplace-text',
        width: 124,
        height: 36,
        background: '$black',
        borderRadius: 5,
      },
    },
  },
})
