import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import Store from './Store.cmp';

describe('Store', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <Store>
          <ThemeProvider />
        </Store>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
