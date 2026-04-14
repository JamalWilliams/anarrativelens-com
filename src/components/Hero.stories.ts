import type { Meta, StoryObj } from '@storybook-astro/framework';
import Hero from './Hero.astro';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    cta: { control: 'text' },
    ctaLink: { control: 'text' },
    secondaryCta: { control: 'text' },
    secondaryCtaLink: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    heading: 'TOOLS. STRATEGY. SUPPORT. ALL IN ONE SYSTEM.',
    subheading: 'HOLISTIC SUPPORT FOR YOUR BUSINESS GROWTH.',
    cta: 'Book Your Free Growth Story Session',
    ctaLink: '/contact',
    secondaryCta: 'Explore The System',
    secondaryCtaLink: '/system',
  },
};

export const Minimal: Story = {
  args: {
    heading: 'Find Your Voice.',
    subheading: 'Tell Your Story. Transform Your Business.',
    cta: 'Get Started',
    ctaLink: '/contact',
  },
};
