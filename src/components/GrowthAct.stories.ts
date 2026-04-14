import type { Meta, StoryObj } from '@storybook-astro/framework';
import GrowthAct from './GrowthAct.astro';

const meta: Meta<typeof GrowthAct> = {
  title: 'Components/GrowthAct',
  component: GrowthAct,
  argTypes: {
    act: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    features: { control: 'object' },
    price: { control: 'text' },
    setup: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof GrowthAct>;

export const Act1: Story = {
  args: {
    act: '1',
    title: 'Set The Stage',
    description: 'Build a strong digital foundation that works while you sleep.',
    features: ['3-5 Page Branded Website', 'CRM & Pipeline Management', 'Calendar & Booking System', 'Basic Marketing Automation'],
    price: '$297',
    setup: '$497',
  },
};

export const Act2: Story = {
  args: {
    act: '2',
    title: 'Rising Action',
    description: 'Drive momentum and scale your impact with AI-driven systems.',
    features: ['Advanced Sales Funnels', 'Marketing Automation', 'AI Employees & Chatbots', 'Reputation & Listing Management'],
    price: '$497',
    setup: '$997',
  },
};
