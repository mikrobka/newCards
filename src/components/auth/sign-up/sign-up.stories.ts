import { StoryObj } from '@storybook/react'

import { SignIn } from './'

const meta = {
  title: 'Components/SignIn',
  component: SignIn,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = {}
