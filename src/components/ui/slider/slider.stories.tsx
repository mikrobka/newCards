import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = {
  render: args => {
    const [value, setValue] = useState(30)

    const changeHandler = (value: number[]) => setValue(value[0])

    return <Slider {...args} value={[value]} disabled={true} multiple onChange={changeHandler} />
  },
}

export const Multiple: Story = {
  render: args => {
    const [value, setValue] = useState([30, 60])

    const changeHandler = (value: number[]) => setValue(value)

    return <Slider {...args} value={value} multiple onChange={changeHandler} />
  },
}

export const WithLabel: Story = {
  render: args => {
    const [value, setValue] = useState([30, 60])

    const changeHandler = (value: number[]) => setValue(value)

    return (
      <Slider {...args} value={value} label={'Number of cards'} multiple onChange={changeHandler} />
    )
  },
}

export const WithoutPropsValue: Story = {}
