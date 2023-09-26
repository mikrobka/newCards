import * as React from 'react'

import s from './navigation-buttons.module.scss'

import { ArrowLeft, ArrowRight } from '@/assets/icons'

type NavigationButtonProps = {
  disabled: boolean
  onClick: () => void
}

export const PrevButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={s.arrowBtn} onClick={onClick} disabled={disabled}>
      <ArrowLeft color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100'} />
    </button>
  )
}

export const NextButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={s.arrowBtn} onClick={onClick} disabled={disabled}>
      <ArrowRight color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100'} />
    </button>
  )
}
