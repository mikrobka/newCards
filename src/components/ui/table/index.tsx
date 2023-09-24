import { clsx } from 'clsx'
import React, { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

import { ChevronUp } from '@assets/icons'

import s from './table.module.scss'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Colum = {
  title: string
  key: string
  isSortable?: boolean
}

type Props = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Array<Colum>
    sort: Sort
    onSort: (sort: Sort) => void
  },
  'children'
>

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-key',
} as const

export const TableHeader = ({ columns, sort, onSort }: Props) => {
  const handleSorting: MouseEventHandler<HTMLTableRowElement> = e => {
    if (!(e.target instanceof HTMLTableCellElement)) return
    const isSortable = e.target.getAttribute(dataAttributes.sortable)
    const key = e.target.getAttribute(dataAttributes.name)

    if (key === null) throw new Error('No data-name')

    if (!isSortable || isSortable !== 'true') return
    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }

    onSort(null)
  }

  return (
    <thead className={s.root}>
      <tr onClick={handleSorting}>
        {columns.map(colum => {
          const showSort = colum.isSortable && sort && sort.key === colum.key

          return (
            <th
              {...{
                [dataAttributes.sortable]: colum.isSortable,
                [dataAttributes.name]: colum.key,
              }}
              key={colum.title}
            >
              <span>
                {colum.title}
                {showSort && (
                  <ChevronUp className={clsx(sort.direction === 'desc' && s.chevronDown)} />
                )}
              </span>
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
