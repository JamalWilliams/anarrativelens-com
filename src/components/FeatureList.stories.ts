import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeatureList from './FeatureList.astro';

const meta: Meta<typeof FeatureList> = {
  title: 'Components/FeatureList',
  component: FeatureList,
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

export const Default: Story = {
  args: {
    eyebrow: 'Act 1 Features',
    heading: 'Act 1 Is Your All-In-One System',
    subheading: 'Everything you need to turn visitors into leads on autopilot.',
    items: [
      { title: 'Launch a client-attracting website', description: 'that showcases your expertise and converts visitors from browsers into buyers.' },
      { title: 'Capture leads from every corner', description: 'your website, social media, and beyond — and automatically funnel them into your CRM.' },
      { title: 'Centralize communication', description: 'with a CRM that eliminates missed messages and builds stronger relationships.' },
    ],
    footerText: 'Act 1 Empowers You To Build A Rock-Solid Foundation.',
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    backgroundVariant: 'subtle',
  },
};
