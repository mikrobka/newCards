import { ComponentProps } from 'react'

import { Slider } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ComponentProps<typeof Slider>> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
