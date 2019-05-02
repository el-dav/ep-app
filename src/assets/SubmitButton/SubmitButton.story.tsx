import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from 'theme';

import SubmitButton from './SubmitButton.cmp';

storiesOf('SubmitButton', module).add('Default', () => {
  const isSubmitting = boolean('isSubmitting', false);
  const isDisabled = boolean('isDisabled', false);
  const onSubmit = action('onSubmit');

  return (
    <ThemeProvider>
      <SubmitButton
        isSubmitting={isSubmitting}
        isDisabled={isDisabled}
        onSubmit={onSubmit}
      />
    </ThemeProvider>
  );
});
