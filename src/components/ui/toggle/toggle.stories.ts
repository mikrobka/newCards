import { ComponentProps } from 'react'

import { Toggle } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ComponentProps<typeof Toggle>> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
