import React from 'react'

import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { ControlledTextField } from '@components/ui/controlled'
import { Typography } from '@components/ui/typography'

import s from './create-new-password.module.scss'
import { useCreateNewPassword } from './use-create-new-password'

type PropsType = {
  onSubmit: (data: any) => void
}

export const CreateNewPassword = ({ onSubmit }: PropsType) => {
  const { handleSubmit, control } = useCreateNewPassword(onSubmit)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledTextField
          label={'Password'}
          name={'password'}
          type={'password'}
          control={control}
          containerProps={{ className: s.textField }}
        />
        <Typography className={s.info} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type={'submit'} className={s.sendButton}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
