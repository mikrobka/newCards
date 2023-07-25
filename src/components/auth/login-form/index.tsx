import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './login-form.module.scss'

import { Button } from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledCheckbox } from '@components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@components/ui/controlled/controlled-text-field'

const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

type Form = z.infer<typeof schema>

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <ControlledTextField label={'Email'} name={'email'} control={control} />
        <ControlledTextField label={'Password'} name={'password'} control={control} />
        <ControlledCheckbox label={'Remember me '} name={'rememberMe'} control={control} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </Card>
  )
}
