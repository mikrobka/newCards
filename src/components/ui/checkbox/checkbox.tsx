import * as React from 'react'
import { FC } from 'react'

// @ts-ignore
import * as CheckboxRadix from '@radix-ui/react-checkbox'
// @ts-ignore
import * as LabelRadix from '@radix-ui/react-label'
// @ts-ignore
// eslint-disable-next-line import/order
import { clsx } from 'clsx'

import Check from '../../../assets/icons/check'
import { Typography } from '../typography/typography'

// eslint-disable-next-line import/no-unresolved

import s from './checkbox.module.scss'

type CheckboxType = {
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
