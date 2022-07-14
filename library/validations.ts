import { z } from 'zod'

const max_first_name = 20
const min_first_name = 2

export const profileValidationSchema = z.object({
  username: z
    .string({
      invalid_type_error: 'Username is required',
    })
    .min(min_first_name, 'Username must be at least 2 characters')
    .max(max_first_name, 'Username length must not exceed 20 characters')
    .default(''),

  twitter: z.nullable(z.string().optional()).default(''),
  avatar: z.nullable(z.string().optional()).default(''),
  email: z
    .string({
      invalid_type_error: 'Email address is required',
    })
    .min(1, 'Email address is required')
    .email('Invalid email address')
    .default(''),
})
