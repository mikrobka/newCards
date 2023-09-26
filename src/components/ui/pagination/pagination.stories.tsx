import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Pagination } from '@components/ui/pagination/index'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    onPerPageChange: {
      action: 'changed per page',
    },
    onChange: {
      action: 'changed page',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [page, setPage] = useState(1)

    return <Pagination {...args} totalCount={20} page={page} onChange={setPage} />
  },
}
export const WithSelect: Story = {
  render: args => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    return (
      <Pagination
        {...args}
        page={page}
        onChange={setPage}
        perPage={perPage}
        onPerPageChange={setPerPage}
        perPageOptions={[10, 20]}
      />
    )
  },
}
