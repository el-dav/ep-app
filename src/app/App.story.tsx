import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'theme';

import App from './App.cmp';

storiesOf('App', module).add('Default', () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
