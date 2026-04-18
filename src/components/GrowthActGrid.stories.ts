import type { Meta, StoryObj } from '@storybook-astro/framework';
import GrowthActGrid from './GrowthActGrid.astro';

const meta: Meta<typeof GrowthActGrid> = {
  title: 'Components/GrowthActGrid',
  component: GrowthActGrid,
};

export default meta;
type Story = StoryObj<typeof GrowthActGrid>;

export const Default: Story = {
  args: {
    eyebrow: 'The Framework',
    heading: 'The Growth Story: A 3-Act Framework',
    acts: [
      {
        act: '1',
        title: 'Set the Stage',
        subtitle: 'BUILD YOUR FOUNDATION',
        description: 'Act 1 gives you the essential tools to get grounded online.',
        features: ['Professional Website', 'Streamlined CRM', 'Automation'],
        variant: 'light-brown',
      },
      {
        act: '2',
        title: 'Rising Action',
        subtitle: 'ACCELERATE YOUR GROWTH',
        description: 'We turn up the volume with targeted traffic strategies.',
        features: ['Enhanced Funnels', 'Marketing Automation', 'AI Tools'],
        variant: 'green',
      },
      {
        act: '3',
        title: 'Break Through',
        subtitle: 'UNLOCK YOUR POTENTIAL',
        description: 'Step fully into your market presence and authority.',
        features: ['Targeted Outreach', 'Brand Visibility', 'Maximum ROI'],
        variant: 'light-brown',
      },
    ],
  },
};
