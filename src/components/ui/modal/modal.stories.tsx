import { ComponentProps } from 'react'

import { Modal } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ComponentProps<typeof Modal>> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
