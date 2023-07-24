import React, { ComponentProps } from 'react'

import s from './avatar.module.scss'

export type AvatarType = {
  src?: string
  size?: ComponentProps<'img'>['src']
  name?: ComponentProps<'img'>['width']
}

export const Avatar = ({ name, src, size = '36' }: AvatarType) => {
  return <img className={s.avatar} src={src} alt={`${name} avatar`} width={size} height={size} />
}
