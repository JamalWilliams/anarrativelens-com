import type { Meta, StoryObj } from '@storybook-astro/framework';
import SplitHeadingSection from './SplitHeadingSection.astro';

const meta: Meta<typeof SplitHeadingSection> = {
  title: 'Components/SplitHeadingSection',
  component: SplitHeadingSection,
  argTypes: {
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitHeadingSection>;

export const Default: Story = {
  args: {
    title: 'The Growth Story System: A Scalable Framework for Sustainable Success',
    text: 'Imagine a website that attracts clients while you rest. A CRM that keeps every conversation organized and easy to manage. Automation that reinforces your brand in every follow-up, so you can focus on your zone of genius.',
  },
};

export const SubtleBackground: Story = {
  args: {
    ...Default.args,
    backgroundVariant: 'subtle',
  },
};
