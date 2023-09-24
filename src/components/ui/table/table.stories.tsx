import React, { ComponentProps, useState } from 'react'

import { Colum, Sort, TableHeader } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ComponentProps<typeof TableHeader>> = {
  title: 'Components/Table',
  component: TableHeader,
  tags: ['autodocs'],
}
const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // @ts-ignore
  args: {},
}

export const WithSort = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)
    const sortString = sort ? `${sort.key}-${sort.direction}` : null

    console.log(sort, sortString)

    const columns: Colum[] = [
      {
        key: 'name',
        title: 'Name',
        isSortable: true,
      },
      {
        key: 'cardsCount',
        title: 'Cards Count',
        isSortable: true,
      },
      {
        key: 'updated',
        title: 'Updated',
        isSortable: true,
      },
      {
        key: 'createdBy',
        title: 'Created By',
        isSortable: true,
      },
      {
        key: 'options',
        title: '',
        isSortable: false,
      },
    ]

    return (
      <table>
        <TableHeader columns={columns} sort={sort} onSort={setSort} />
        <tbody>
          {data.map(item => (
            <tr key={item.title}>
              <td>{item.title} </td>
              <td> {item.cardsCount} </td>
              <td> {item.updated} </td>
              <td> {item.createdBy} </td>
              <td> icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}
