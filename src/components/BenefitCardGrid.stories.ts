import type { Meta, StoryObj } from '@storybook-astro/framework';
import BenefitCardGrid from './BenefitCardGrid.astro';

const meta: Meta<typeof BenefitCardGrid> = {
  title: 'Components/BenefitCardGrid',
  component: BenefitCardGrid,
};

export default meta;
type Story = StoryObj<typeof BenefitCardGrid>;

export const Default: Story = {
  args: {
    heading: 'How Act 1 Solves Your Challenges',
    cards: [
      {
        eyebrow: 'Website',
        title: 'Your Lead Generation Platform',
        description: 'Launch a professional website that showcases your brand.',
        benefit: 'Establish a credible online presence and attract clients 24/7.',
      },
      {
        eyebrow: 'Automation',
        title: 'Your Time-Saving Engine',
        description: 'Automate your follow-up with custom email and SMS sequences.',
        benefit: 'Recover hours of your time and ensure no lead is forgotten.',
      },
    ],
  },
};
