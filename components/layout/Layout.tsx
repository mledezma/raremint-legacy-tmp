import * as React from 'react'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { TopMessage } from '~/components/layout/TopMessage'
import { styled } from '~/styles/stitches.config'

interface Props {
  children: React.ReactNode;
}

const SiteContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100vh',
})

const Main = styled('div', {
  pt: 60,
  '@small-min': {
    pt: 89,
  },
  minHeight: '100vh-30%',
})

export const Layout: React.FC<Props> = ({ children }) => (
  <SiteContainer>
    <Header />
    <Main>
      <TopMessage />
      {children}
    </Main>
    <Footer />
  </SiteContainer>
)
