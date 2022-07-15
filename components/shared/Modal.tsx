import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { styled } from '~/styles/stitches.config'

type ModalType = 'pure_black' | 'default' | 'full_height' | 'pokemon_drop'

const StyledBackdrop = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'hidden',
  zIndex: 9999,
  variants: {
    variant: {
      full_height: {
        height: '100vh',
        backgroundImage:
          'url(data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIyMDBweCIgaGVpZ2h0PSI4MDAwcHgiIHZpZXdCb3g9IjAgMCAyMjAwIDgwMDAiPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJHcmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjAiIGN5PSIwIiByPSIxMzQyLjE3NTAwMDAwMDAwMDQiIGZ4PSIwIiBmeT0iMCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCggMC45OTk5OTk5OTk5OTk5OTk4LCAwLCAwLCAxLjEyNDQ0MzUzMzgxNjM3OTgsIDExMDAuOCwxMzU2LjgpICIgc3ByZWFkTWV0aG9kPSJwYWQiPgo8c3RvcCAgb2Zmc2V0PSIyMi43NDUwOTgwMzkyMTU2ODclIiBzdG9wLWNvbG9yPSIjMDExNTM2IiBzdG9wLW9wYWNpdHk9IjAuODk4MDM5MjE1Njg2Mjc0NSIvPgoKPHN0b3AgIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjg5ODAzOTIxNTY4NjI3NDUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgoKPGcgaWQ9IkxheWVyXzYiPgo8Zz4KPGc+CjxnPgo8cGF0aCBmaWxsPSJ1cmwoI0dyYWRpZW50XzEpIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIyNTIuOCAtNzYuOApMIC03Ni44IC03Ni44IC03Ni44IDgwNjQgMjI1Mi44IDgwNjQgMjI1Mi44IC03Ni44IFoiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4K)',
      },
      pokemon_drop: {
        backgroundColor: ' #000',
      },
      pure_black: {
        backgroundColor: '#000',
      },
      checkout: {
        backgroundImage:
          'url(data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIyMDBweCIgaGVpZ2h0PSI4MDAwcHgiIHZpZXdCb3g9IjAgMCAyMjAwIDgwMDAiPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJHcmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjAiIGN5PSIwIiByPSIxMzQyLjE3NTAwMDAwMDAwMDQiIGZ4PSIwIiBmeT0iMCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCggMC45OTk5OTk5OTk5OTk5OTk4LCAwLCAwLCAxLjEyNDQ0MzUzMzgxNjM3OTgsIDExMDAuOCwxMzU2LjgpICIgc3ByZWFkTWV0aG9kPSJwYWQiPgo8c3RvcCAgb2Zmc2V0PSIyMi43NDUwOTgwMzkyMTU2ODclIiBzdG9wLWNvbG9yPSIjMDExNTM2IiBzdG9wLW9wYWNpdHk9IjAuODk4MDM5MjE1Njg2Mjc0NSIvPgoKPHN0b3AgIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjg5ODAzOTIxNTY4NjI3NDUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgoKPGcgaWQ9IkxheWVyXzYiPgo8Zz4KPGc+CjxnPgo8cGF0aCBmaWxsPSJ1cmwoI0dyYWRpZW50XzEpIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIyNTIuOCAtNzYuOApMIC03Ni44IC03Ni44IC03Ni44IDgwNjQgMjI1Mi44IDgwNjQgMjI1Mi44IC03Ni44IFoiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4K)',
        height: '100vh',
      },
      default: {
        backgroundImage:
          'url(data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjIyMDBweCIgaGVpZ2h0PSI4MDAwcHgiIHZpZXdCb3g9IjAgMCAyMjAwIDgwMDAiPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJHcmFkaWVudF8xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjAiIGN5PSIwIiByPSIxMzQyLjE3NTAwMDAwMDAwMDQiIGZ4PSIwIiBmeT0iMCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCggMC45OTk5OTk5OTk5OTk5OTk4LCAwLCAwLCAxLjEyNDQ0MzUzMzgxNjM3OTgsIDExMDAuOCwxMzU2LjgpICIgc3ByZWFkTWV0aG9kPSJwYWQiPgo8c3RvcCAgb2Zmc2V0PSIyMi43NDUwOTgwMzkyMTU2ODclIiBzdG9wLWNvbG9yPSIjMDExNTM2IiBzdG9wLW9wYWNpdHk9IjAuODk4MDM5MjE1Njg2Mjc0NSIvPgoKPHN0b3AgIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjg5ODAzOTIxNTY4NjI3NDUiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgoKPGcgaWQ9IkxheWVyXzYiPgo8Zz4KPGc+CjxnPgo8cGF0aCBmaWxsPSJ1cmwoI0dyYWRpZW50XzEpIiBzdHJva2U9Im5vbmUiIGQ9IgpNIDIyNTIuOCAtNzYuOApMIC03Ni44IC03Ni44IC03Ni44IDgwNjQgMjI1Mi44IDgwNjQgMjI1Mi44IC03Ni44IFoiLz4KPC9nPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4K)',
      },
    },
  },
})

const StyledModalCard = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: 'fit-content',
  padding: '0 2rem',
  borderRadius: '$regular',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  zIndex: 10000,
  width: 'calc(100% - $small)',
  maxWidth: 600,
  mx: '$small',
  '@small-min': {
    mx: 'auto',
  },
  variants: {
    variant: {
      full_height: {
        backgroundColor: 'white',
      },
      pokemon_drop: {
        maxWidth: '80%',
        width: '80%',
        backgroundColor: ' #000',
      },
      pure_black: {
        backgroundColor: ' #000',
        margin: 'auto',
      },
      checkout: {
        overflow: 'auto',
        height: '100%',
        mx: 0,
        py: '$x-large',
        borderRadius: 0,
        backgroundColor: '$pop-up-dialogue-bg-color-100-opaque',
        '@small-min': {
          height: 'max-content',
          borderRadius: '$regular',
          margin: 'auto',
        },
      },
      default: {
        backgroundColor: '$pop-up-dialogue-bg-color-100-opaque',
        margin: 'auto',
      },
    },
  },
})

const Backdrop: React.FC<React.HTMLAttributes<HTMLDivElement> & { modalType?: ModalType }> = ({
  children,
  onClick,
  modalType,
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledBackdrop variant={modalType} />
      {children}
    </motion.div>
  )
}

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
}

export interface ModalProps {
  handleClose(): void
  show: boolean
  modalType?: ModalType
}

export const Modal: React.FC<ModalProps> = ({
  handleClose,
  children,
  show,
  modalType = 'default',
}) => {
  useEffect(() => {
    const nav_style = document.getElementById('nav-container')?.style
    const body_style = document.body.style
    body_style.paddingRight = show ? '15px' : '0px'
    body_style.overflowY = show ? 'hidden' : 'auto'
    if (nav_style)
      nav_style.maxWidth = show
        ? 'calc(var(--sizes-breakpoint-large) + 63px)'
        : 'calc(var(--sizes-breakpoint-large) + 48px)'

    return () => {
      body_style.overflowY = 'auto'
      body_style.paddingRight = '0px'
      if (nav_style) nav_style.maxWidth = 'calc(var(--sizes-breakpoint-large) + 48px)'
    }
  }, [show])

  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {show ? (
        <Backdrop
          onClick={() => {
            handleClose()
          }}
          modalType={modalType}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ position: 'relative' }}
          >
            <StyledModalCard role="dialog" variant={modalType}>
              {children}
            </StyledModalCard>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}
