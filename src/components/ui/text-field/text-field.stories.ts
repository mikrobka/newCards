import { ComponentProps } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta: Meta<ComponentProps<typeof TextField>> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    label: 'Input with error',
    value: 'Wrong value',
    errorMessage: 'Error message',
  },
}
