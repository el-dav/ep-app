import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import { ThemeProvider } from 'theme';

import OrderBlotter from './OrderBlotter.cmp';
import { testOrderData } from './testOrderData';

storiesOf('OrderBlotter', module).add('Default', () => {
  const orders = object('Orders', testOrderData);

  return (
    <ThemeProvider>
      <OrderBlotter orders={orders} />
    </ThemeProvider>
  );
});
