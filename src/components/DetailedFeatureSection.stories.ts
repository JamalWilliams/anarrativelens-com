import type { Meta, StoryObj } from '@storybook-astro/framework';
import DetailedFeatureSection from './DetailedFeatureSection.astro';

const meta: Meta<typeof DetailedFeatureSection> = {
  title: 'Components/DetailedFeatureSection',
  component: DetailedFeatureSection,
  argTypes: {
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailedFeatureSection>;

export const Default: Story = {
  args: {
    eyebrow: 'Our Expertise',
    heading: 'Strategic Solutions for Modern Brands.',
    text: 'We combine deep technical knowledge with creative storytelling to help you navigate the digital landscape and achieve sustainable growth.',
    listItems: [
      'Brand Identity & Narrative',
      'Custom Website Development',
      'Marketing Automation & CRM',
      'AI-Powered Growth Tools',
      'Scalable Systems Design',
      'Performance Analytics',
    ],
    statementText: 'We don\'t just build tools; we build the foundation for your next big break through.',
  },
};

export const SubtleBackground: Story = {
  args: {
    ...Default.args,
    backgroundVariant: 'subtle',
  },
};
