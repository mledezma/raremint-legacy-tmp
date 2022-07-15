import { useStore } from '~/store'
import React, { useEffect } from 'react'
import { MobileNavMenu } from './MobileNavMenu'
import { MobileNavHeader } from './MobileNavHeader'

export const MobileNav = () => {
  const { show_mobile_menu } = useStore()

  useEffect(() => {
    document.body.style.overflowY = show_mobile_menu ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [show_mobile_menu])

  return (
    <React.Fragment>
      <MobileNavHeader />
      <MobileNavMenu />
    </React.Fragment>
  )
}
