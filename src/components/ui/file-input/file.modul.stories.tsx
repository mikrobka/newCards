import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Edit } from '@assets/icons'
import { Button } from '@components/ui'
import { FileInput } from '@components/ui/file-input/index'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof FileInput>

export const UploadWithButton: Story = {
  render: args => {
    const [file, setFile] = useState('')
    const changeFileHandler = (file: string) => setFile(file)

    return (
      <div>
        <FileInput
          {...args}
          onChange={changeFileHandler}
          trigger={
            <Button variant={'secondary'} disabled={args.disabled}>
              Upload file
            </Button>
          }
        />
        <div>{file}</div>
      </div>
    )
  },
}
export const UploadWithIcon: Story = {
  render: args => {
    const [file, setFile] = useState('')
    const changeFileHandler = (file: string) => setFile(file)

    return (
      <div>
        <FileInput {...args} onChange={changeFileHandler} trigger={<Edit />} />
        <div>{file}</div>
      </div>
    )
  },
}
