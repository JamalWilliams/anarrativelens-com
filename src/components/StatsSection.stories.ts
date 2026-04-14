import type { Meta, StoryObj } from '@storybook-astro/framework';
import StatsSection from './StatsSection.astro';

const meta: Meta<typeof StatsSection> = {
  title: 'Components/StatsSection',
  component: StatsSection,
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatsSection>;

export const ThreeColumns: Story = {
  args: {
    stats: [
      { value: '93%', label: 'Of online experiences begin with search' },
      { value: '31%', label: 'Local search results come from directories' },
      { value: '15%', label: 'Close rate for local SEO leads' },
    ],
    columns: 3,
  },
};

export const FourColumns: Story = {
  args: {
    stats: [
      { value: '391%', label: 'Conversion boost by responding within one minute.' },
      { value: '9X', label: 'Leads more likely to convert in 5 min vs 30 min.' },
      { value: '79%', label: 'Of leads fail to convert due to lack of nurturing.' },
      { value: '50%', label: 'Buy from the vendor that responds first.' },
    ],
    columns: 4,
  },
};
