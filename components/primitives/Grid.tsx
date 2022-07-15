import { styled } from '~/styles/stitches.config'

export const Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',

  variants: {
    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      dense: {
        gridAutoFlow: 'dense',
      },
      rowDense: {
        gridAutoFlow: 'row dense',
      },
      columnDense: {
        gridAutoFlow: 'column dense',
      },
    },
    columns: {
      auto: {
        gridTemplateColumns: 'repeat(auto-fill, 1fr)',
      },
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      '300-fit': {
        gridTemplateColumns: '1fr',
        '@media (min-width: 520px)': {
          gridTemplateColumns: 'repeat(auto-fit, 300px)',
        },
      },
      '300-fill': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      unset: {},
    },
    gap: {
      'x-small': {
        gap: '$x-small',
      },
      small: {
        gap: '$small',
      },
      regular: {
        gap: '$regular',
      },
      large: {
        gap: '$large',
      },
      'xx-large': {
        gap: '$xx-large',
      },
      unset: {},
    },
    gapX: {
      small: {
        columnGap: '$small',
      },
      regular: {
        columnGap: '$regular',
      },
      large: {
        columnGap: '$large',
      },
      unset: {},
    },
    gapY: {
      small: {
        rowGap: '$small',
      },
      regular: {
        rowGap: '$regular',
      },
      large: {
        rowGap: '$large',
      },
      unset: {},
    },
  },
  defaultVariants: {
    flow: 'row',
    align: 'stretch',
    justify: 'start',
    columns: 1,
    gap: 'regular',
  },
})
