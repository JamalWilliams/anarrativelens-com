import type { Meta, StoryObj } from '@storybook-astro/framework';
import PricingTable from './PricingTable.astro';

const meta: Meta<typeof PricingTable> = {
  title: 'Components/PricingTable',
  component: PricingTable,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingTable>;

export const Default: Story = {
  args: {
    heading: 'The Growth S.T.O.R.Y. System',
    subheading: 'A theatrical approach to business growth. Each act builds upon the last to create a masterpiece of conversion and authority.',
    pricing: [
      {
        id: '1',
        title: 'Set The Stage',
        description: 'Build a strong digital foundation that works while you sleep.',
        features: [
          '3-5 Page Branded Website',
          'CRM & Pipeline Management',
          'Calendar & Booking System',
          'Basic Marketing Automation'
        ],
        price: '$297',
        setup: '$497',
        variant: 'light-brown'
      },
      {
        id: '2',
        title: 'Rising Action',
        description: 'Drive momentum and scale your impact with AI-driven systems.',
        features: [
          'Advanced Sales Funnels',
          'Marketing Automation',
          'AI Employees & Chatbots',
          'Reputation & Listing Management'
        ],
        price: '$497',
        setup: '$997',
        variant: 'green'
      },
      {
        id: '3',
        title: 'Break Through',
        description: 'Amplify your brand authority and build a lasting community.',
        features: [
          'Course & Community Platform',
          'Authority Building Content',
          'Strategic Ad Campaigns',
          'High-Value Client Support'
        ],
        price: '$997',
        setup: '$1,997',
        variant: 'light-brown'
      }
    ]
  },
};
