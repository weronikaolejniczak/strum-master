import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: 'Card title',
    href: 'https://www.google.com/',
    children: 'Card content',
  },
};
