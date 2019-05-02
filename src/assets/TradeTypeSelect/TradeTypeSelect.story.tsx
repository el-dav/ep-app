import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from 'theme';
import { TradeType } from 'types';

import TradeTypeSelect from './TradeTypeSelect.cmp';

const ControlledTradeTypeSelect = () => {
  const [tradeType, setTradeType] = useState<TradeType>(TradeType.BUY);

  const onChange = (value: TradeType) => {
    setTradeType(value);
  };

  return (
    <ThemeProvider>
      <TradeTypeSelect value={tradeType} onChange={onChange} />
    </ThemeProvider>
  );
};

storiesOf('TradeTypeSelect', module)
  .add('Default', () => {
    const tradeType = select(
      'Trade Type',
      {
        [TradeType.BUY]: TradeType.BUY,
        [TradeType.SELL]: TradeType.SELL
      },
      TradeType.BUY
    );

    const onChange = action('onChange');

    return (
      <ThemeProvider>
        <TradeTypeSelect value={tradeType} onChange={onChange} />
      </ThemeProvider>
    );
  })
  .add('Interactive', () => <ControlledTradeTypeSelect />);
