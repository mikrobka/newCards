import React from 'react'

import { useSignIn } from '@components/auth/sign-in/use-sign-in'
import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledCheckbox, ControlledTextField } from '@components/ui/controlled'
import { Typography } from '@components/ui/typography'
import s from 'src/components/auth/sign-up/sign-up.module.scss'

type SignInProps = {
  onSubmit: (data: any) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control } = useSignIn(onSubmit)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit} className={s.form}>
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
      <Typography className={s.description} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>
      <Typography as={'a'} href={'/sign-up'} className={s.signUp} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
