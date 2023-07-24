import { ComponentProps } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta: Meta<ComponentProps<typeof Card>> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
  },
}
