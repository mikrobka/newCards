import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'
import React, { ReactNode, KeyboardEvent, FC, ComponentProps, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { Close, Eye, EyeClose, Search } from '@assets/icons'

import s from './text-field.module.scss'

export type TextFieldProps = {
  value?: string
  label?: string
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearValue?: () => void
  className?: string
} & ComponentProps<'input'>

export const TextField: FC<TextFieldProps> = ({
  disabled,
  value,
  type,
  label,
  errorMessage,
  iconStart,
  iconEnd,
  onEnter,
  onKeyDown,
  onClearValue,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const showError = errorMessage && errorMessage.length > 0

  if (type === 'search') {
    iconStart = <Search />
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
  const classNames = {
    root: clsx(s.root, className),
    input: clsx(s.input, showError && s.error),
    iconButton: clsx(s.iconButton, disabled && s.disabled),
    iconStart: clsx(s.iconStart),
  }
  const showClearValueIcon = !iconEnd && !showError && onClearValue && value?.length! > 0
  const dataIconStart = iconStart ? 'start' : ''
  const dataIconEnd = iconEnd || showClearValueIcon ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd
  const onClickShowValue = () => {
    if (!disabled) {
      setShowPassword(!showPassword)
    }
  }

  return (
    <div className={classNames.root}>
      <Label.Root>
        <Typography variant={'body2'} color={'inherit'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {iconStart && <span className={s.iconStart}>{iconStart}</span>}
          <input
            value={value}
            disabled={disabled}
            data-icon={dataIcon}
            className={classNames.input}
            type={showPassword ? 'text' : type}
            onKeyDown={handleKeyDown}
            {...rest}
          />

          {type === 'password' && (
            <button className={classNames.iconButton} type="button" onClick={onClickShowValue}>
              {!showPassword ? <Eye /> : <EyeClose />}
            </button>
          )}

          {showClearValueIcon && (
            <button className={classNames.iconButton} onClick={onClearValue} type="button">
              {<Close />}
            </button>
          )}

          {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        </div>
      </Label.Root>
      {showError && (
        <Typography variant={'error'} color={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
