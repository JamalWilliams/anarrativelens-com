import type { Meta, StoryObj } from '@storybook-astro/framework';
import InsightGrid from './InsightGrid.astro';

const meta: Meta<typeof InsightGrid> = {
  title: 'Components/InsightGrid',
  component: InsightGrid,
};

export default meta;
type Story = StoryObj<typeof InsightGrid>;

export const Default: Story = {
  args: {
    posts: [
      {
        id: 'post-1',
        data: {
          title: 'The Power of Soulful Automation',
          description: 'How to build systems that feel human and authentic.',
          pubDate: '2026-04-01',
          tags: ['Automation', 'Strategy'],
          image: {
            url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
            alt: 'Robot hand touching human hand'
          }
        }
      },
      {
        id: 'post-2',
        data: {
          title: 'Brand Storytelling in the Age of AI',
          description: 'Using technical authority to anchor your creative vision.',
          pubDate: '2026-03-25',
          tags: ['Branding', 'AI'],
          image: {
            url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
            alt: 'Typewriter with laptop'
          }
        }
      }
    ],
  },
};

export const Empty: Story = {
  args: {
    posts: [],
  },
};
