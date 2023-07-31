import { clsx } from 'clsx'
import React, { forwardRef } from 'react'

import s from './button.module.scss'

export interface ButtonProps<T extends React.ElementType = 'button'> {
  as?: T
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
}

const ButtonRef = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: React.ForwardedRef<any>
) => {
  const {
    as: Component = 'button',
    variant = 'primary',
    fullWidth,
    className,
    ...otherProps
  } = props

  const classNames = {
    root: clsx(className, s[variant], fullWidth && s.fullWidth),
  }

  return <Component ref={ref} className={classNames.root} {...otherProps} />
}

export const Button = forwardRef(ButtonRef)
