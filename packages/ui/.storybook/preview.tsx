import React from 'react';
import { Parameters, Preview } from '@storybook/react';
import { ThemeProvider } from '../src/providers/ThemeProvider/ThemeProvider';

import { withThemeByClassName } from '@storybook/addon-themes';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
  withThemeByClassName({
    defaultTheme: 'light',
    themes: {
      light: '',
      dark: 'dark bg-background',
    },
  }),
];

export const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
