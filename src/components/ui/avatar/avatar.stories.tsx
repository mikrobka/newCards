import { Meta, StoryObj } from '@storybook/react'

import { Logout } from '@assets/icons'
import { Avatar } from '@components/ui'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: '',
    name: 'Some',
  },
}

export const Small: Story = {
  args: {
    name: 'Some Name',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    width: 20,
    height: 20,
  },
}

export const Large: Story = {
  args: {
    name: 'Some Name',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    width: 96,
    height: 96,
  },
}

export const WithIcon: Story = {
  args: {
    name: 'Some Name',
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    avatarContent: <Logout />,
    width: 96,
    height: 96,
  },
}
