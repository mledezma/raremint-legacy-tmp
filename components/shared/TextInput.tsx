import { InputHTMLAttributes } from 'react'
import { styled } from '~/styles/stitches.config'
import { CheckIcon } from '../icons'
import { Box } from '../primitives/Box'
import { Flex } from '../primitives/Flex'

const InputBlock = styled('div', {
  width: '100%',
})

const InputLabel = styled('div', {
  mb: '$x-small',
  fontSize: '$chakra-petch-18',
  lineHeight: '$chakra-petch-18',
})

const TextInput = styled('input', {
  width: '100%',
  px: '$small',
  py: '$x-small',
  minWidth: 30,
  borderRadius: '5px',
  variants: {
    variant: {
      error: {
        border: '1px solid #dc3545',
      },
      regular: {
        border: '1px solid white',
      },
    },
  },
})

const InputMessage = styled('div', {
  variants: {
    variant: {
      hint: {
        color: '$footer-signup-button',
      },
      error: {
        color: '#dc3545',
      },
    },
  },
})

const ValidatorContainer = styled(Box, {
  minWidth: 20,
})

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  hint?: string
  label?: string
  header_icon?: React.ReactNode
  static_icon?: React.ReactNode
  check_value?: boolean
}

export const FormInput = ({
  error,
  hint,
  label,
  required,
  value,
  header_icon,
  static_icon,
  check_value = true,
  ...props
}: InputProps) => {
  return (
    <InputBlock>
      <Flex align="end">
        <InputLabel>{`${label}${required ? '*' : ''}`}</InputLabel> {header_icon}
      </Flex>

      <Flex align="center" css={{ gap: 20 }}>
        <TextInput
          value={value}
          required={required}
          {...props}
          variant={error ? 'error' : 'regular'}
        />
        {check_value && (
          <ValidatorContainer>
            {static_icon ? static_icon : !error && <CheckIcon />}
          </ValidatorContainer>
        )}
      </Flex>
      {error ? <InputMessage variant="error">{error}</InputMessage> : null}
      {hint ? <InputMessage variant="hint">{hint}</InputMessage> : null}
    </InputBlock>
  )
}
