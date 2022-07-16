import React from 'react'
import { Flex } from '../primitives/Flex'
import { Text } from '../primitives/Text'
import { Link } from '../primitives/Link'

type BreadcrumbProps = {
  path: {
    url?: string
    label: string
  }[]
}

export const Breadcrumb = ({ path }: BreadcrumbProps) => {
  return (
    <Flex
      align="center"
      css={{
        gap: 5,
        py: '$small',
        mb: '$x-small',
        '@small-max': {
          display: 'none',
        },
      }}
    >
      {path.map((section, index) => {
        const is_last = index + 1 === path.length
        return (
          <React.Fragment key={index}>
            {section.url ? (
              <Link
                css={{
                  color: '$marketplace-text',
                  fontSize: '$chakra-petch-15',
                  fontWeight: 600,
                  transition: 'color 400ms',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                to={section.url}
              >
                {section.label}
              </Link>
            ) : (
              <Text
                variant="breadcrumb"
                padding="flat"
                css={{
                  fontWeight: 600,
                  color: is_last ? '$default-text-accentuate-color' : '$marketplace-text',
                }}
              >
                {section.label}
              </Text>
            )}
            {is_last ? '' : '/'}
          </React.Fragment>
        )
      })}
    </Flex>
  )
}
