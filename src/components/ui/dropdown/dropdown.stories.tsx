import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Edit } from '@assets/icons'

import { Dropdown, DropdownItemWithIcon } from '.'
import { Button } from '..'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
      </>
    ),
    trigger: <Button>open</Button>,
  },
}
