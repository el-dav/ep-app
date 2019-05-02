import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';

import SymbolSelect from './SymbolSelect.cmp';

const onSelect = () => undefined;
const value = 'AAPL';

describe('SymbolSelect', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <SymbolSelect onSelect={onSelect} value={value} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
