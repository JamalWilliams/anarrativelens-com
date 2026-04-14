import type { Meta, StoryObj } from '@storybook-astro/framework';
import DetailsTable from './DetailsTable.astro';

const meta: Meta<typeof DetailsTable> = {
  title: 'Components/DetailsTable',
  component: DetailsTable,
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
    padding: {
      control: 'select',
      options: ['normal', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailsTable>;

export const Default: Story = {
  args: {
    eyebrow: 'The Framework',
    title: 'How the Narrative Unfolds.',
    rows: [
      { 
        title: 'Act 1: Setting the Stage', 
        description: 'We audit your existing digital footprint and align your brand narrative with your business goals. This is where we build your foundational infrastructure.' 
      },
      { 
        title: 'Act 2: Rising Action', 
        description: 'Implementation of automated systems, AI-driven workflows, and high-conversion funnels that drive momentum and scale your impact.' 
      },
      { 
        title: 'Act 3: The Breakthrough', 
        description: 'Amplify your authority and build a lasting community through strategic content, courses, and integrated engagement platforms.' 
      }
    ],
  },
};

export const SubtleBackground: Story = {
  args: {
    eyebrow: 'Specifications',
    title: 'The Technical Blueprint.',
    rows: [
      { 
        title: 'Architecture', 
        description: 'Headless Astro framework integrated with Obsidian-as-CMS for zero-sync, high-performance content management.' 
      },
      { 
        title: 'Automation', 
        description: 'Custom n8n workflow engineering paired with GHL for seamless lead management and customer journey automation.' 
      },
      { 
        title: 'Design', 
        description: 'Theatrical brand systems utilizing a sophisticated brown and green palette with classical serif typography.' 
      }
    ],
    backgroundVariant: 'subtle',
    padding: 'large',
  },
};
