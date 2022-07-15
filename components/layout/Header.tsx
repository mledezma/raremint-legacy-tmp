import _ from 'lodash'
import { styled } from '~/styles/stitches.config'
import { DesktopNav } from '~/components/layout/DesktopNav'
import { MobileNav } from '~/components/layout/MobileNav'
import { useEffect, useState, useRef } from 'react'
import { useStore } from '~/store'

const StickyHeader = styled('div', {
  transition: 'background 0.24s ease-in-out 50ms',
  bg: 'rgba(15, 15, 15, 0.1)',
  backdropFilter: 'saturate(180%) blur(10px)',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 9999,
  mb: 60,
  height: 60,
})

export const Header = () => {
  const header_ref = useRef(null)
  const { setActiveNavKey } = useStore()
  const [scroll_pos, setScrollPos] = useState<number | null>(null)

  // Setting scroll background animation
  useEffect(() => {
    if (document.body) {
      setScrollPos(window.scrollY)

      document.body.addEventListener('click', (e: any) => {
        if (e.target.closest(`#${header_ref.current?.id}, #mobile_nav_options`)) return

        setActiveNavKey(null)
      })

      let last_known_scroll_pos = 0
      let ticking = false

      document.addEventListener('scroll', (e: any) => {
        last_known_scroll_pos = window.scrollY

        if (!ticking) {
          window.requestAnimationFrame(function () {
            setScrollPos(last_known_scroll_pos)

            ticking = false
          })

          ticking = true
        }
      })
    }
  }, [])

  return (
    <StickyHeader
      ref={header_ref}
      id="top-header"
      css={{ bg: scroll_pos && scroll_pos > 60 ? '#151515' : undefined }}
    >
      <MobileNav />
      <DesktopNav />
    </StickyHeader>
  )
}
