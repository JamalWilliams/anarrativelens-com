import type { Meta, StoryObj } from '@storybook-astro/framework';
import LegalSupport from './LegalSupport.astro';

const meta: Meta<typeof LegalSupport> = {
  title: 'Components/LegalSupport',
  component: LegalSupport,
};

export default meta;
type Story = StoryObj<typeof LegalSupport>;

export const Default: Story = {
  args: {
    title: 'Secure Digital Delivery',
    description: 'All products are delivered instantly via secure link. Need support with implementation? Reach out to our team.',
    backgroundVariant: 'subtle',
  },
};
