import type { Meta, StoryObj } from '@storybook-astro/framework';
import TwoColumnSection from './TwoColumnSection.astro';

const meta: Meta<typeof TwoColumnSection> = {
  title: 'Components/TwoColumnSection',
  component: TwoColumnSection,
  argTypes: {
    eyebrow: { control: 'text' },
    heading: { control: 'text' },
    text: { control: 'text' },
    image: { control: 'text' },
    imageAlt: { control: 'text' },
    imageOnRight: { control: 'boolean' },
    cta: { control: 'text' },
    ctaLink: { control: 'text' },
    backgroundVariant: {
      control: 'select',
      options: ['default', 'subtle'],
    },
    columnRatio: {
      control: 'select',
      options: ['50/50', '66/33', '33/66'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TwoColumnSection>;

export const ImageLeft: Story = {
  args: {
    eyebrow: 'Our Vision',
    heading: 'Strategic Growth through Storytelling.',
    text: 'We help businesses find their authentic voice and share it with the world. Our holistic approach combines technical expertise with soulful strategy to create lasting impact.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Business strategy meeting',
    imageOnRight: false,
    cta: 'Learn More',
    ctaLink: '/about',
  },
};

export const ImageRight: Story = {
  args: {
    eyebrow: 'Process',
    heading: 'Expert Guidance Every Step of the Way.',
    text: 'From the initial consultation to the final delivery, we work closely with you to ensure your vision is realized. Our process is designed to be collaborative, transparent, and results-oriented.',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeea16c3b?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Collaborative workflow',
    imageOnRight: true,
    cta: 'Our Process',
    ctaLink: '/process',
  },
};

export const SubtleBackground: Story = {
  args: {
    ...ImageLeft.args,
    backgroundVariant: 'subtle',
  },
};

export const LargeImageSmallContent: Story = {
  args: {
    ...ImageLeft.args,
    columnRatio: '66/33',
  },
};

export const SmallImageLargeContent: Story = {
  args: {
    ...ImageRight.args,
    columnRatio: '33/66',
  },
};
