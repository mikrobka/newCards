import React from 'react'

import { Avatar, Typography } from '@components/ui'

import s from './profile-avatar-bar.module.scss'

export type ProfileAvatarBarPropsType = {
  name: string
  avatar: string
}
export const ProfileAvatarBar = (props: ProfileAvatarBarPropsType) => {
  const { name, avatar } = props

  return (
    <div className={s.profileInfo}>
      <Typography variant={'subtitle1'} className={s.subtitle}>
        {name}
      </Typography>
      <Avatar src={avatar} name={name} />
    </div>
  )
}
