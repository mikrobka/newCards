import { DevTool } from '@hookform/devtools'
import React from 'react'

import { ControlledTextField, Card, Button, Typography } from '@components/ui'

import s from './forgot-password.module.scss'
import { useForgotPassword } from './use-forgot-password'

type SignInProps = {
  onSubmit: (data: any) => void
}

export const ForgotPassword = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control } = useForgotPassword(onSubmit)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit} className={s.form}>
        <DevTool control={control} />
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Typography className={s.info} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth type={'submit'} className={s.sendButton}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.rememberPassword} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Did you remember your password?
      </Typography>
      <Typography className={s.loginIn} variant={'link1'} as={'a'} href={'/sign-in'}>
        Try logging in
      </Typography>
    </Card>
  )
}
