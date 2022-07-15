import { keyframes, styled } from "~/styles/stitches.config"

const spinner_anim = keyframes({
  '0%': {
    top: 36,
    left: 36,
    width: 0,
    height: 0,
    opacity: 0,
  },
  '4.9%': {
    top: 36,
    left: 36,
    width: 0,
    height: 0,
    opacity: 0,
  },
  '5%': {
    top: 36,
    left: 36,
    width: 0,
    height: 0,
    opacity: 1,
  },
  '100%': {
    top: 0,
    left: 0,
    width: 72,
    height: 72,
    opacity: 0,
  }
})

const SpinnerStyled = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: 80,
  height: 80,
  m: 'auto',

  'div': {
    position: 'absolute',
    border: '4px solid $default-text-accentuate-color',
    opacity: 1,
    borderRadius: '50%',
    animation: `${spinner_anim} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite`,
  },
  'div:last-of-type': {
    animationDelay: -0.5,
  },
})

export const Spinner = () => {
  return <SpinnerStyled><div/><div/></SpinnerStyled>
}
