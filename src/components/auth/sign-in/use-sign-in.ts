import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional().default(false),
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>

export const useSignIn = (onSubmit: any) => {
  const { handleSubmit, ...rest } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
