import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import React, { FC } from 'react'

import { Check } from '@assets/icons'
import { Typography } from '@components/ui'

import s from './checkbox.module.scss'

export type CheckboxType = {
  checked?: boolean
  onChange?: () => void
  position?: 'left'
  disabled?: boolean
  id?: string
  label?: string
  required?: boolean
  className?: string
}

export const Checkbox: FC<CheckboxType> = ({
  checked,
  onChange,
  position,
  disabled,
  id,
  className,
  required,
  label,
}) => {
  const classNames = {
    container: clsx(s.container, className),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    root: s.root,
    indicator: s.idicator,
    label: clsx(s.label, disabled && s.dissabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild>
        <Typography variant="body2" className={classNames.label} as="label">
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              className={classNames.root}
              checked={checked}
              onCheckedChange={onChange}
              id={id}
              disabled={disabled}
              required={required}
            >
              {checked && (
                <CheckboxRadix.CheckboxIndicator>
                  <Check />
                </CheckboxRadix.CheckboxIndicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
