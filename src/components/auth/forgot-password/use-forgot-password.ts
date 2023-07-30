import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
    password: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('Enter password')
      .min(8, 'Password must be at least 8 characters'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

type Form = z.infer<typeof schema>

export const useSignUpForm = (onSubmit: any) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
