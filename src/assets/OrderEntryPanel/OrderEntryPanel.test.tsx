import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import OrderEntryPanel from './OrderEntryPanel.cmp';

const onSubmit = () => undefined;
const onErrorDismiss = () => undefined;
const noOrderError = '';
const orderError = 'There was an error';

describe('OrderEntryPanel', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <OrderEntryPanel
            isSubmitting={false}
            onSubmit={onSubmit}
            orderError={noOrderError}
            onErrorDismiss={onErrorDismiss}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly with error message', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <OrderEntryPanel
            isSubmitting={false}
            onSubmit={onSubmit}
            orderError={orderError}
            onErrorDismiss={onErrorDismiss}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
