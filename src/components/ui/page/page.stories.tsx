import { ComponentProps } from 'react'

import { Page } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ComponentProps<typeof Page>> = {
  title: 'Components/Page',
  component: Page,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
