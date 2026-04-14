import type { StorybookConfig } from '@storybook-astro/framework';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;
