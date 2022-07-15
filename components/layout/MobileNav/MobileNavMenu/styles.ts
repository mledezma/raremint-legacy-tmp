import { motion } from 'framer-motion'
import { styled } from '~/styles/stitches.config'

export const MobileNavMenuMotion = styled(motion.div, {
  top: 60,
  right: 0,
  left: 0,
  position: 'absolute',
  transformOrigin: 'top',
})

export const MobileMenuWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.3)',
  bg: '#151515',
})

export const MobileSearchBox = styled('div', {
  flexGrow: 1,
  py: 13,
  height: 66,
  px: '$small',
  '> div': { ml: 0, input: { width: '100%' } },
})

export const mobile_menu_animation = {
  animate: {
    clipPath: 'inset(-25% -25% -25% -25%)',
  },
  exit: {
    clipPath: 'inset(-25% -25% 100% -25%)',
  },
  initial: {
    clipPath: 'inset(-25% -25% 100% -25%)',
  },
  transition: {
    type: 'spring',
    stiffness: 40,
    restDelta: 2,
  },
}
