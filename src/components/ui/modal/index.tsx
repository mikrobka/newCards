import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  // DialogTrigger,
} from '@radix-ui/react-dialog'
import { Separator } from '@radix-ui/react-separator'
import { clsx } from 'clsx'
import React, { ComponentProps, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import { Close } from '@assets/icons'

import s from './modal.module.scss'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
  open: boolean
  onClose?: () => void
  renderCancelButton?: () => ReactNode
  renderActionButton?: () => ReactNode
  showSeparator?: boolean
  showCloseButton?: boolean
  title?: string
  size?: ModalSize //sm - 367px,md - 532px,lg - 764px.
  children?: ReactNode
  className?: string
} & ComponentProps<'div'>

export const Modal: FC<ModalProps> = ({
  onClose,
  open,
  renderActionButton,
  renderCancelButton,
  size = 'md',
  title,
  className,
  children,
  showCloseButton = true,
  showSeparator = true,
}) => {
  const classNames = {
    content: getContentClassName(size, className),
  }

  function onCloseHandler() {
    onClose?.()
  }

  return (
    <Dialog open={open} onOpenChange={onCloseHandler}>
      {open && (
        <DialogPortal>
          <DialogOverlay className={s.DialogOverlay} />
          <DialogContent className={classNames.content}>
            <div className={s.titleWrapper}>
              {showCloseButton && (
                <DialogClose>
                  <button className={s.IconButton}>
                    <Close />
                  </button>
                </DialogClose>
              )}
              <DialogTitle className={s.DialogTitle}>
                <Typography variant={'h2'}>{title}</Typography>
                {showSeparator && <Separator className={s.separator} />}
              </DialogTitle>
            </div>

            <div className={s.contentBox}>{children}</div>

            <div className={s.footerBlock}>
              <DialogClose>{renderCancelButton?.()}</DialogClose>
              <DialogClose className={s.actionButton}>{renderActionButton?.()}</DialogClose>
            </div>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  )
}

function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size)

  return clsx(className, s.DialogContent, sizeClassName)
}

function getSizeClassName(size: ModalSize) {
  if (size === 'sm') return s.sm
  if (size === 'md') return s.md
  if (size === 'lg') return s.lg
}
