import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from 'theme';

import OrderEntryPanel from './OrderEntryPanel.cmp';

storiesOf('OrderEntryPanel', module).add('Default', () => {
  const isSubmitting = boolean('is Submitting', false);
  const orderError = text('Error Message', '');
  const onSubmit = action('onSubmit');
  const onErrorDissmiss = action('onErrorDissmiss');
  return (
    <ThemeProvider>
      <OrderEntryPanel
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        orderError={orderError}
        onErrorDismiss={onErrorDissmiss}
      />
    </ThemeProvider>
  );
});
