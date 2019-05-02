import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'theme';
import { TradeType } from 'types';

import TradeTypeSelect from './TradeTypeSelect.cmp';

const onChange = () => undefined;
const value = TradeType.BUY;
const sellValue = TradeType.SELL;

describe('TradeTypeSelect', () => {
  it('renders the Component correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <TradeTypeSelect value={value} onChange={onChange} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Component correctly for SELL', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <TradeTypeSelect value={sellValue} onChange={onChange} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
