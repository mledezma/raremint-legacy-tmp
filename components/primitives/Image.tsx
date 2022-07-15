import { styled } from '~/styles/stitches.config'
import { AdvancedImage } from '@cloudinary/react'
import _ from 'lodash'

export const StyledImage = styled('img', {
  width: '100%',
  height: 'auto',
  maxWidth: 300,
  variants: {
    size: {
      full: {
        maxWidth: '100%',
      },
    },
    fit: {
      contain: {
        objectFit: 'contain',
      },
      cover: {
        objectFit: 'cover',
      },
    },
    variant: {
      center: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
      },
      icon: {
        width: 30,
        height: 30,
      },
      banner: {
        width: '100%',
      },
      asset: {
        maxWidth: 399,
        minWidth: 100,
        minHeight: 200,
        maxHeight: 400,
        borderRadius: 10,
      },
      navIcon: {
        width: 32,
        height: 32,
        mx: '$regular',
      },
      avatar: {
        borderRadius: '50%',
        height: 39,
        width: 39,
        objectFit: 'cover',
      },
    },
  },
  defaultVariants: {
    fit: 'contain',
  },
})

// export type ImageProps = AdvancedImage |
// export interface ImageProps extends AdvancedImage {
//   src: string | CloudinaryImage
//   css?: CSS
//   alt?: string
// }

export const Image = ({ src, alt, ...props }: any) => {
  return _.isString(src) ? (
    <StyledImage src={src} {...props} alt={alt || src} loading="lazy" />
  ) : (
    <StyledImage as={AdvancedImage} cldImg={src} alt={alt || src} {...props} loading="lazy" />
  )
}
