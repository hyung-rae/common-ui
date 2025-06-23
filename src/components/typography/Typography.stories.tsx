import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from './_component'

const meta = {
  title: 'component/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['d1', 'h1', 'h2', 'h3', 'h4', 't1', 't2_600', 't2_500', 't3', 'b1', 'b2', 'b3', 'b3_long', 'c1', 'c2'],
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5'],
    },
    lineClamp: {
      control: 'number',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Typography>

type Story = StoryObj<typeof meta>

export default meta

export const Text: Story = {
  args: {
    variant: 'd1',
    children: 'Typography',
    as: 'h1',
  },
}

export const WithFixedWidth: Story = {
  render: (args) => (
    <div style={{ width: '300px', border: '1px solid #121212' }}>
      <Typography {...args} />
    </div>
  ),
  args: {
    variant: 'b3',
    children:
      'This is a long text that will demonstrate how typography behaves when it has a fixed width container. It should wrap to the next line when it exceeds the container width.',
    lineClamp: 2,
    as: 'p',
    align: 'left',
  },
}
