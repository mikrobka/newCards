import React from 'react'

import { Email } from '@assets/icons/email'
import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { Typography } from '@components/ui/typography'

import s from './check-email.module.scss'

type PropsType = {
  email: string
}

export const CheckEmail = ({ email }: PropsType) => {
  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Check Email
        </Typography>
        <div className={s.container}>
          <Email className={s.email} />
        </div>
        <Typography className={s.description} variant={'body2'}>
          We’ve sent an Email with instructions to
          <br /> {email ? email : 'example@gmail.com'}
        </Typography>
        <Button fullWidth>Back to Sign In</Button>
      </Card>
    </>
  )
}
