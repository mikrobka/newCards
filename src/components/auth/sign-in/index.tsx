import React from 'react'

import { useSignInForm } from '@components/auth/sign-in/use-sign-in-form'
import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledCheckbox, ControlledTextField } from '@components/ui/controlled'
import { Typography } from '@components/ui/typography'

import s from './sign-in.module.scss'

type SignInProps = {
  onSubmit: (data: any) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control } = useSignInForm(onSubmit)

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign In
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
          <div className={s.forgot}>
            <Typography variant={'body2'} href={'/forgot-password'} as={'a'}>
              Forgot Password?
            </Typography>
          </div>
          <Button fullWidth type={'submit'} className={s.signIn}>
            Sign In
          </Button>
        </form>
        <div className={s.description}>
          <Typography variant={'body2'}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
          </Typography>
        </div>

        <Typography
          style={{ margin: '0.69rem 0 0 0' }}
          variant={'link1'}
          as={'a'}
          href={'/sign-up'}
          className={s.signUp}
        >
          Sign Up
        </Typography>
      </Card>
    </>
  )
}
