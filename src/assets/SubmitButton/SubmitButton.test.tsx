import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import SubmitButton from './SubmitButton.cmp';

const onSubmit = () => undefined;

describe('SubmitButton', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <SubmitButton
            onSubmit={onSubmit}
            isDisabled={false}
            isSubmitting={false}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly while submitting', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <SubmitButton onSubmit={onSubmit} isDisabled={false} isSubmitting />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly while disabled', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <SubmitButton onSubmit={onSubmit} isDisabled isSubmitting={false} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
