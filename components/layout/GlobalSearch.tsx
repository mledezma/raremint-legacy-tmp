import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useSetState } from 'react-use'
import { Input } from '~/components/primitives/Input'
import { Box } from '~/components/primitives/Box'
import { Flex } from '~/components/primitives/Flex'
import { Link } from '~/components/primitives/Link'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'

interface GlobalSearchState {
  search_query: string
}

const defaultGlobalSearchState = {
  search_query: '',
}

const StyledResults = styled('div', {
  borderRadius: '$regular',
  overflow: 'hidden',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  backgroundColor: '#1C1C1C',
  border: '1px solid #000',
  width: '100vw',
  '@small-min': {
    width: '31.25rem',
  },
})

export const GlobalSearch = () => {
  const [{ search_query }, setState] = useSetState<GlobalSearchState>(defaultGlobalSearchState)
  const { search_options, show_mobile_menu, toggleMobileMenu, setActiveNavKey } = useStore()
  const search_results = useMemo(() => {
    return search_query.length > 2
      ? search_options.filter(({ text }) => text.toLowerCase().includes(search_query.toLowerCase()))
      : []
  }, [search_options, search_query])

  return (
    <Flex
      css={{
        position: 'relative',
        ml: '$regular',
        width: '100%',
        '.search-results': {
          position: 'absolute',
          maxWidth: '100vw',
          top: '2.81rem',
          left: 0,
          '@small-max': {
            left: '-$small',
          },
        },
      }}
    >
      <Box
        as="img"
        src="/images/search.svg"
        css={{ position: 'absolute', left: '$x-small', top: '$x-small' }}
      />
      <Input
        type="text"
        id="global-search-input"
        variant="global_search"
        placeholder="Search by tier, category, or type"
        value={search_query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState({ search_query: e.target.value })
        }
      />
      <motion.div
        className="search-results"
        initial="hidden"
        animate={search_results.length > 0 ? 'visible' : 'hidden'}
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      >
        <StyledResults>
          {search_results.map(({ text, url }) => (
            <Link
              href={url}
              key={url}
              onClick={() => {
                setState({ search_query: '' })
                setActiveNavKey(null)
                if (show_mobile_menu) toggleMobileMenu(false)
              }}
              css={{
                display: 'flex',
                borderBottom: '1px solid #000',
                padding: '$regular',
                '&:hover': {
                  backgroundColor: '#1C1C1C',
                  color: 'white',
                },
              }}
            >
              {text}
            </Link>
          ))}
        </StyledResults>
      </motion.div>
    </Flex>
  )
}
