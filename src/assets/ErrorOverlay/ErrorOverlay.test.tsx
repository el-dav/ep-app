import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import ErrorOverlay from './ErrorOverlay.cmp';

const errorMessage = 'message';
const onDismiss = () => undefined;

describe('ErrorOverlay', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ErrorOverlay
            isShown={false}
            errorMessage={errorMessage}
            onDissmiss={onDismiss}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly when shown', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ErrorOverlay
            isShown
            errorMessage={errorMessage}
            onDissmiss={onDismiss}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
