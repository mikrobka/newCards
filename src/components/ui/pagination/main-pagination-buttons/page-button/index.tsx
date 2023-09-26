import clsx from 'clsx'
import * as React from 'react'

import s from './page-button.module.scss'

import { Typography } from '@/components/ui'

export type NavigationButtonPropsType = {
  onClick: () => void
  disabled?: boolean
}

type PageButtonPropsType = NavigationButtonPropsType & {
  page: number
  selected: boolean
}

export const PageButton = ({ onClick, disabled, selected, page }: PageButtonPropsType) => {
  const classNames = {
    button: clsx(s.pageButton, selected && s.selected),
    typography: clsx(selected && s.selectedPageNumber),
  }

  return (
    <button onClick={onClick} disabled={selected || disabled} className={classNames.button}>
      <Typography className={classNames.typography} variant={'body2'}>
        {page}
      </Typography>
    </button>
  )
}
