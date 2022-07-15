import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { theme as stitches_theme } from './themes/theme'

// Making text responsive
for (const property in stitches_theme.theme.typeStyles) {
  const font_property = stitches_theme.theme.typeStyles[property as keyof object]
  const temp_font_size: number = parseInt(font_property['fontSize'], 10)

  stitches_theme.theme.typeStyles[property as keyof object] = {
    // @ts-ignore
    fontFamily: "'Chakra Petch', sans-serif",
    // @ts-ignore
    fontSize: `${0.0625 * temp_font_size}rem`,
    // @ts-ignore
    lineHeight: (
      parseInt(font_property.lineHeight, 10) / parseInt(font_property.fontSize, 10)
    ).toFixed(4),
  }
}

// NOTE: Light theme is default theme if Dark is available.
const getFontStyles = () => {
  let font_sizes: any = {}
  let line_heights: any = {}
  let letter_spacing: any = {}

  for (const property in stitches_theme.theme.typeStyles) {
    const temp_font_size: number =
      stitches_theme.theme.typeStyles[property as keyof object]['fontSize']
    font_sizes[property as keyof object] = temp_font_size

    const temp_line_height: number =
      stitches_theme.theme.typeStyles[property as keyof object]['lineHeight']
    line_heights[property as keyof object] = temp_line_height

    const temp_letter_spacing: number =
      stitches_theme.theme.typeStyles[property as keyof object]['letterSpacing']
    letter_spacing[property as keyof object] = temp_letter_spacing
  }

  return { fontSizes: font_sizes, lineHeights: line_heights, letterSpacings: letter_spacing }
}

export const theme = stitches_theme.theme
export const { styled, getCssText, config, globalCss, keyframes } = createStitches({
  // @ts-ignore
  theme: {
    ...stitches_theme.theme,
    sizes: {
      'icon-small': '1.375rem',
      'icon-medium': '2.75rem',
      'breakpoint-x-small': '425px',
      'breakpoint-small': '768px',
      'breakpoint-medium': '1024px',
      'breakpoint-large': '1440px',
      container: '1260px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
    },
    ...getFontStyles(),
    shadows: {
      gray: '#dde7ef',
    },
  },
  media: {
    'x-small-min': '(min-width: 425px)',
    'small-min': '(min-width: 768px)',
    'regular-min': '(min-width: 992px)',
    'medium-min': '(min-width: 1024px)',
    'large-min': '(min-width: 1440px)',
    'x-small-max': '(max-width: 425px)',
    'small-max': '(max-width: 768px)',
    'regular-max': '(max-width: 992px)',
    'medium-max': '(max-width: 1024px)',
    'large-max': '(max-width: 1440px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>

export const icons = config.theme.Icons
