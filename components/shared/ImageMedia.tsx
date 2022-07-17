import * as React from 'react'
import { Image } from '~/components/primitives/Image'
import { styled } from '~/styles/stitches.config'

const Media = styled('video', {
  borderRadius: '$regular',
  objectFit: 'cover',
  width: '100%',
})

const ImageMediaStyled = styled(Image, {
  borderRadius: '$regular',
  size: '100%',
})

export const ImageMedia: React.FC<
  (React.VideoHTMLAttributes<HTMLVideoElement> | React.ImgHTMLAttributes<HTMLImageElement>) & {
    image: string
    video?: string
  }
> = ({ image, video, ...props }) => {
  if (video) {
    return (
      <Media
        loop
        autoPlay
        muted
        css={{ width: props.width ? parseInt(props.width!) : undefined }}
        poster={image}
        {...props}
      >
        <source src={video} type="video/mp4" />
      </Media>
    )
  }
  return image.match(/\.(mp4|mov|webm)$/g) ? (
    <Media
      loop
      autoPlay
      muted
      playsInline
      css={{ width: props.width ? parseInt(props.width!) : undefined }}
      {...props}
    >
      <source src={image} type="video/mp4" />
      <source src={image} type="video/webm" />
      <source src={image} type="video/mov" />
    </Media>
  ) : (
    <ImageMediaStyled src={image} size="full" {...props} />
  )
}
