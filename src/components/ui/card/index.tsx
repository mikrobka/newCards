import { clsx } from 'clsx'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './card.module.scss'

export type CardProps = NonNullable<unknown> & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div ref={ref} className={classNames.root} {...restProps}></div>
})
