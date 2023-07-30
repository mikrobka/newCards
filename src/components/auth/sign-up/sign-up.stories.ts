import { StoryObj } from '@storybook/react'

import { SignUp } from './'

const meta = {
  title: 'Components/Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = {}
