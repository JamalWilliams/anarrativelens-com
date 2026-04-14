import type { Preview } from '@storybook-astro/framework';

import '../src/styles/global.css';

// Inject the site's CSS variables for Storybook
if (typeof document !== 'undefined') {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', '#46280e');
  root.style.setProperty('--color-secondary', '#afbd3b');
  root.style.setProperty('--color-bg', '#290a09');
  root.style.setProperty('--color-accent', '#6d7b00');
  root.style.setProperty('--color-text', '#fbf9f6');
  root.style.setProperty('--color-heading', '#f4efe9');
  root.style.setProperty('--font-heading', '"Montserrat", sans-serif');
  root.style.setProperty('--font-body', '"Libre Baskerville", serif');
  
  // Also set the body background explicitly for Storybook's iframe
  document.body.style.backgroundColor = '#290a09';
  document.body.style.color = '#fbf9f6';
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'brand-bg',
      values: [
        {
          name: 'brand-bg',
          value: '#290a09',
        },
      ],
    },
  },
};

export default preview;
