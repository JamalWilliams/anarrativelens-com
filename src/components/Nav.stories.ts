import type { Meta, StoryObj } from '@storybook-astro/framework';
import Nav from './Nav.astro';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {},
};
