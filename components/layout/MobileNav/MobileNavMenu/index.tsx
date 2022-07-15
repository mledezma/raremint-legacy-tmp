import { AnimatePresence } from 'framer-motion'
import { GlobalSearch } from '~/components/layout/GlobalSearch'
import { useStore } from '~/store'
import { nav_options } from '../../nav-options'
import { MobileNavOption } from '../MobileNavOption'
import {
  MobileMenuWrapper,
  MobileNavMenuMotion,
  MobileSearchBox,
  mobile_menu_animation,
} from './styles'

export const MobileNavMenu = () => {
  const { show_mobile_menu } = useStore()

  return (
    <AnimatePresence>
      {show_mobile_menu ? (
        <MobileNavMenuMotion
          key="mobile_nav_options"
          id="mobile_nav_options"
          {...mobile_menu_animation}
        >
          <MobileMenuWrapper>
            <MobileSearchBox>
              <GlobalSearch />
            </MobileSearchBox>
            {nav_options.map((nav_props) => (
              <MobileNavOption {...nav_props} key={nav_props.nav_key} />
            ))}
          </MobileMenuWrapper>
        </MobileNavMenuMotion>
      ) : null}
    </AnimatePresence>
  )
}
