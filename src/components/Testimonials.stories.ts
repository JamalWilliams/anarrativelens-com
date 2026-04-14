import type { Meta, StoryObj } from '@storybook-astro/framework';
import Testimonials from './Testimonials.astro';

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    testimonials: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  args: {
    heading: 'What Our Muses Say',
    subheading: 'Real stories of transformation from businesses that found their voice.',
  },
};
