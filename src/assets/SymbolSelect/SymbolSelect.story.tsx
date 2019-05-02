import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { ThemeProvider } from 'theme';

import SymbolSelect from './SymbolSelect.cmp';

const InteractiveSymbolSelect = () => {
  const [textValue, setTextValue] = useState<string>('');
  return (
    <ThemeProvider>
      <SymbolSelect
        value={textValue}
        onSelect={(value: string) => {
          setTextValue(value);
        }}
      />
    </ThemeProvider>
  );
};

storiesOf('SymbolSelect', module)
  .add('Default', () => {
    const onSelect = action('On Select');
    const value = text('Search Value', '');
    return (
      <ThemeProvider>
        <SymbolSelect value={value} onSelect={onSelect} />
      </ThemeProvider>
    );
  })
  .add('Interactive', () => <InteractiveSymbolSelect />);
