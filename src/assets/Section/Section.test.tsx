import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import Section from './Section.cmp';

describe('Section', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Section />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
