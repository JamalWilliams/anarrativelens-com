import type { Meta, StoryObj } from '@storybook-astro/framework';
import SplitContactSection from './SplitContactSection.astro';

const meta: Meta<typeof SplitContactSection> = {
  title: 'Components/SplitContactSection',
  component: SplitContactSection,
};

export default meta;
type Story = StoryObj<typeof SplitContactSection>;

export const Default: Story = {
  args: {
    heading: "Let's write your next chapter.",
    text: "Ready to automate your growth and tell a deeper brand story? Book a session or reach out directly.",
    email: "hello@anarrativelens.com",
    phone: "555-0123",
    hours: {
      days: "Monday — Friday",
      times: "9:00am — 6:00pm EST",
      note: "By Appointment Only"
    },
    card: {
      icon: "🗓️",
      title: "Strategy Session",
      text: "Book a free 30-minute growth story session where we'll audit your current systems and map out your next act.",
      cta: "Check Available Times",
      ctaLink: "#",
      footer: "Powered by our custom booking system"
    }
  },
};
