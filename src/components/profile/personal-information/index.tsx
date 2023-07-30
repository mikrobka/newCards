import React from 'react'

import { Camera, Edit, Logout } from '@assets/icons'
import Ava from '@assets/images/ava2.png'
import Button from '@components/ui/button'
import { Card } from '@components/ui/card'
import { Typography } from '@components/ui/typography'

import s from './personal-information.module.scss'

type PropsType = {
  email: string
  name: string
  avatar: string
  onAvatarChange: (newAvatar: string) => void
  onNameChange: (newName: string) => void
  onLogout: () => void
}

export const PersonalInformation = ({
  name,
  email,
  avatar,
  onAvatarChange,
  onNameChange,
  onLogout,
}: PropsType) => {
  const handleAvatarChanged = () => {
    onAvatarChange('new Avatar')
  }
  const handleNameChanged = () => {
    onNameChange('New name')
  }
  const handleLogout = () => {
    onLogout()
  }

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.photoContainer}>
          <div>
            <img src={Ava} alt={'avatar'} />
            <button className={s.editAvatarButton} onClick={handleAvatarChanged}>
              <Camera />
            </button>
          </div>
        </div>
        <div className={s.nameContainer}>
          <Typography variant={'h1'}>{name ? name : 'Andrey'}</Typography>
          <Edit />
        </div>
        <Typography className={s.email}>{email ? email : 'example@gmail.com'}</Typography>
        <div className={s.logout}>
          <Button variant={'secondary'}>
            <Logout />
            Logout
          </Button>
        </div>
      </Card>
    </>
  )
}
