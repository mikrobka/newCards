import { StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = {}
