import type { Meta, StoryObj } from '@storybook-astro/framework';
import NarrativeCards from './NarrativeCards.astro';

const meta: Meta<typeof NarrativeCards> = {
  title: 'Components/NarrativeCards',
  component: NarrativeCards,
  argTypes: {
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NarrativeCards>;

export const Default: Story = {
  args: {
    eyebrow: 'Our Services',
    title: 'Ways We Can Help You Grow',
    cards: [
      {
        pill: 'Strategy',
        title: 'Narrative Design',
        text: 'Crafting the core story that drives your business forward.',
        link: '#',
      },
      {
        pill: 'Systems',
        title: 'Growth Infrastructure',
        text: 'Building the technical foundation for scalable success.',
        link: '#',
      },
      {
        pill: 'Impact',
        title: 'Authority Building',
        text: 'Positioning your brand as a leader in your industry.',
        link: '#',
      },
    ],
    cta: 'View All Services',
  },
};

export const LeftAligned: Story = {
  args: {
    ...Default.args,
    alignment: 'left',
  },
};
