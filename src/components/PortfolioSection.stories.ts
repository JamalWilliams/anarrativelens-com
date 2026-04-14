import type { Meta, StoryObj } from '@storybook-astro/framework';
import PortfolioSection from './PortfolioSection.astro';

const meta: Meta<typeof PortfolioSection> = {
  title: 'Components/PortfolioSection',
  component: PortfolioSection,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    projects: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof PortfolioSection>;

export const Default: Story = {
  args: {
    heading: 'Featured Stories',
    subheading: 'A glimpse into the narratives we\'ve helped build and capture.',
  },
};
