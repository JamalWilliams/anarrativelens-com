import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProductGrid from './ProductGrid.astro';

const meta: Meta<typeof ProductGrid> = {
  title: 'Components/ProductGrid',
  component: ProductGrid,
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

export const Default: Story = {
  args: {
    backgroundVariant: 'default',
    products: [
      { 
        title: "Brand Identity Blueprint", 
        price: "$97", 
        description: "The foundational framework for building an authentic, soulful brand narrative.",
        category: "Branding"
      },
      { 
        title: "Sales Funnel Leak Locator", 
        price: "$47", 
        description: "A strategic audit tool to identify where your customers are dropping off.",
        category: "Automation"
      },
      { 
        title: "Sales Funnel Quick Start Guide", 
        price: "$197", 
        description: "Go from zero to a live, automated lead engine in 48 hours.",
        category: "Implementation"
      }
    ],
  },
};
