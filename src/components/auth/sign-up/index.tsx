import React from 'react'

import s from './sign-up.module.scss'

import { useSignUpForm } from '@components/auth/sign-up/use-sign-up'
import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledTextField } from '@components/ui/controlled'
import { Typography } from '@components/ui/typography'

//TODO : add error message if confirm password !== password

type SignInProps = {
  onSubmit: (data: any) => void
}

export const SignUp = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control } = useSignUpForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
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
        <ControlledTextField
          type={'password'}
          label={'Confirm Password'}
          name={'confirmPassword'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Button fullWidth type={'submit'} className={s.signUp}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.description} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Already have an account?
      </Typography>
      <Typography className={s.signIn} variant={'link1'} as={'a'} href={'/sign-in'}>
        Sign In
      </Typography>
    </Card>
  )
}
