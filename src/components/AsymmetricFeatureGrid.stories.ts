import type { Meta, StoryObj } from '@storybook-astro/framework';
import AsymmetricFeatureGrid from './AsymmetricFeatureGrid.astro';

const meta: Meta<typeof AsymmetricFeatureGrid> = {
  title: 'Components/AsymmetricFeatureGrid',
  component: AsymmetricFeatureGrid,
};

export default meta;
type Story = StoryObj<typeof AsymmetricFeatureGrid>;

export const Default: Story = {
  args: {
    eyebrow: 'Premium Features',
    heading: 'A Different Approach to Growth',
    features: [
      {
        title: 'Strategic Narrative',
        description: 'We help you craft a story that resonates with your ideal clients.',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Technical Excellence',
        description: 'Robust systems that scale with your ambitions.',
        image: 'https://images.unsplash.com/photo-1454165833767-027eeea16c3b?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Soulful Automation',
        description: 'Human-centric tech that feels authentic, not robotic.',
        image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Sustainable Impact',
        description: 'Growth that lasts beyond the next campaign.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
};
