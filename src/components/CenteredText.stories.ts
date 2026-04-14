import type { Meta, StoryObj } from '@storybook-astro/framework';
import CenteredText from './CenteredText.astro';

const meta: Meta<typeof CenteredText> = {
  title: 'Components/CenteredText',
  component: CenteredText,
};

export default meta;
type Story = StoryObj<typeof CenteredText>;

export const Default: Story = {
  args: {
    text: 'A Narrative Lens is a creative agency that helps businesses tell their story and grow their impact through strategic design and technology.',
  },
};
