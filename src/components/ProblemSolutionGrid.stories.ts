import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProblemSolutionGrid from './ProblemSolutionGrid.astro';

const meta: Meta<typeof ProblemSolutionGrid> = {
  title: 'Components/ProblemSolutionGrid',
  component: ProblemSolutionGrid,
};

export default meta;
type Story = StoryObj<typeof ProblemSolutionGrid>;

export const Default: Story = {
  args: {
    heading: 'Tired of Tech Headaches and Missed Connections?',
    subheading: 'Clunky tools and scattered systems are getting in the way. If you’ve ever felt overwhelmed by tech, you’re not alone.',
    problemsTitle: 'Many businesses struggle with:',
    problems: [
      { title: 'Outdated websites', description: 'That don’t effectively deliver your message—or build connections.' },
      { title: 'Disconnected systems', description: 'That cause confusion, slow you down, and spread you thin.' },
      { title: 'Missed messages', description: 'And inconsistent follow-up that cost you clients.' },
    ],
    solutionsTitle: 'This leads to:',
    solutions: [
      { title: 'Frustration and overwhelm', description: 'A constant sense of being behind and never quite caught up.' },
      { title: 'Wasted time and money', description: 'Investing in tools that don\'t talk to each other.' },
      { title: 'Lost leads and sales', description: 'Potential clients slipping through the cracks.' },
    ],
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    backgroundVariant: 'subtle',
  },
};
