import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledCheckbox, ControlledTextField } from '@components/ui/controlled'
import { Typography } from '@components/ui/typography'

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

export const SignIn = () => {
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
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign in
      </Typography>
      <form onSubmit={onSubmit} className={s.form}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledTextField
          type={'password'}
          label={'Password'}
          name={'password'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <ControlledCheckbox
          position={'left'}
          label={'Remember me '}
          name={'rememberMe'}
          control={control}
          className={s.checkbox}
        />
        <Typography
          className={s.forgotPassword}
          variant={'body2'}
          href={'/forgot-password'}
          as={'a'}
        >
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'} className={s.signIn}>
          Sign In
        </Button>
      </form>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Typography className={s.description} variant={'body2'}>
        Don't have an account?
      </Typography>
      <Typography as={'a'} href={'/sign-up'} className={s.signUp} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
