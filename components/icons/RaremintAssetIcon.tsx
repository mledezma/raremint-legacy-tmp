import { theme } from '~/styles/stitches.config'

type Props = {
  fill?: string
}

export const RaremintAssetIcon = ({
  fill = theme.colors['marketplace-icon-logo-on-cards'],
}: Props) => (
  <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_311_48182)">
      <path
        d="M17.2913 32.3608L20.5592 29.0844L14.0149 22.5142L20.9828 15.5117H0.433594L17.2913 32.3608ZM23.2564 11.293L27.6654 15.6933L20.5592 22.8168L23.7059 25.9376L34.0972 15.5031L25.6856 7.07422H8.84518L4.65236 11.293H23.2564Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_311_48182">
        <rect width="34.58" height="34.58" fill="white" transform="translate(0.208984 0.980469)" />
      </clipPath>
    </defs>
  </svg>
)
