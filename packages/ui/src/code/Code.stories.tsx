import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './code';

const meta = {
  title: 'Components/Code',
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "import React from 'react';",
  },
};
