import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { AnimatePresence, motion, MotionProps, Variants } from 'framer-motion'
import React, { CSSProperties, ReactNode, useState, FC, ComponentPropsWithoutRef } from 'react'

import s from './dropdown.module.scss'
import { Typography } from '..'

export type DropdownProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
}
const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
} satisfies Variants

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps

export const Dropdown = ({ children, trigger, align = 'end', className, style }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    button: s.button,
    content: clsx(s.content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              asChild
              forceMount
              className={classNames.content}
              align={align}
              sideOffset={8}
              style={style}
              onClick={event => event.stopPropagation()}
            >
              <motion.div
                animate={open ? 'open' : 'closed'}
                initial="closed"
                exit="closed"
                variants={menu}
              >
                <DropdownMenuRadix.Arrow className={classNames.arrowBox} asChild>
                  <div className={classNames.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={classNames.itemsBox}>{children}</div>
              </motion.div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect?: (event: Event) => void
  className?: string
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      <motion.div {...item}>{children}</motion.div>
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  icon,
  disabled,
  onSelect,
  text,
  className,
  style,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <motion.div {...item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant="caption">{text}</Typography>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
}
