import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import AppBar, { AppBarType } from './AppBar.cmp';

describe('AppBar', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <AppBar title="Title" />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly with a different AppBarType', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <AppBar title="Title" appBarType={AppBarType.SECONDARY} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly with extra text', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <AppBar title="Title" extraText="Extra text" />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
