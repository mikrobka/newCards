import * as Tabs from '@radix-ui/react-tabs'
import React, { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './tab-triger.module.scss'

type TabTriggerPropsType = {
  value?: string
  disabled?: boolean
  children?: ReactNode
}
export const TabTrigger = (props: TabTriggerPropsType) => {
  const { value = '', disabled = false, children } = props

  return (
    <Tabs.Trigger
      tabIndex={0}
      value={value}
      disabled={disabled}
      className={`${s.TabsTrigger} ${disabled && s.disabled}`}
    >
      <Typography variant={'body1'}>{children}</Typography>
    </Tabs.Trigger>
  )
}
