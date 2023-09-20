import React, { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Colum = {
  title: string
  key: string
  isSortable?: boolean
}

type Props = ComponentPropsWithoutRef<'thead'> & {
  columns: Array<Colum>
  sort: Sort
  onSort: (sort: Sort) => void
}

const dataAttributes = {
  sortable: 'data-sortable',
  name: 'data-key',
} as const

export const TableHeader = ({ columns, sort, onSort }: Props) => {
  const handleSorting: MouseEventHandler<HTMLTableHeaderCellElement> = e => {
    const isSortable = e.currentTarget.getAttribute(dataAttributes.sortable)
    const key = e.currentTarget.getAttribute(dataAttributes.name)

    if (key === null) throw new Error('No data-name')

    if (!isSortable) return
    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }

    onSort(null)
  }

  return (
    <thead>
      <tr>
        {columns.map(colum => {
          const showSort = colum.isSortable && sort && sort.key === colum.key

          return (
            <th
              {...{
                [dataAttributes.sortable]: colum.isSortable,
                [dataAttributes.name]: colum.key,
              }}
              key={colum.title}
              onClick={handleSorting}
            >
              {colum.title} {showSort && <span>{sort?.direction === 'asc' ? '▲' : '▼'}</span>}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
