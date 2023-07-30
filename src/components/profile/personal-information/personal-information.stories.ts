import { StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta = {
  title: 'Components/Profile/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default = {}
