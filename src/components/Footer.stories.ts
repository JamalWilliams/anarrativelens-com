import type { Meta, StoryObj } from '@storybook-astro/framework';
import Footer from './Footer.astro';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};
