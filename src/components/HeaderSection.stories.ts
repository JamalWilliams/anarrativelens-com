import type { Meta, StoryObj } from '@storybook-astro/framework';
import HeaderSection from './HeaderSection.astro';

const meta: Meta<typeof HeaderSection> = {
  title: 'Components/HeaderSection',
  component: HeaderSection,
  argTypes: {
    eyebrow: { control: 'text' },
    heading: { control: 'text' },
    text: { control: 'text' },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle', 'accent'],
    },
    maxWidth: {
      control: 'select',
      options: ['narrow', 'medium', 'wide'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderSection>;

export const LeftAligned: Story = {
  args: {
    eyebrow: 'Our Vision',
    heading: 'Strategic Growth through Storytelling.',
    text: 'We help businesses find their authentic voice and share it with the world. Our holistic approach combines technical expertise with soulful strategy to create lasting impact.',
    alignment: 'left',
  },
};

export const CenterAligned: Story = {
  args: {
    eyebrow: 'The Framework',
    heading: 'The Growth Story System',
    text: 'A scalable framework for sustainable success. We guide you through three distinct acts to capture leads, automate growth, and breakthrough to your full potential.',
    alignment: 'center',
  },
};

export const AccentBackground: Story = {
  args: {
    heading: 'Ready to tell your story?',
    text: 'Schedule a free strategy session today and discover how the Growth Story System can transform your business.',
    backgroundVariant: 'accent',
    alignment: 'center',
    maxWidth: 'medium',
  },
};

export const SubtleBackground: Story = {
  args: {
    eyebrow: 'Process',
    heading: 'How We Work Together',
    backgroundVariant: 'subtle',
    alignment: 'left',
  },
};
