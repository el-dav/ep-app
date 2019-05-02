import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { ThemeProvider, styled } from 'theme';

import AppBar, { AppBarType } from './AppBar.cmp';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

storiesOf('AppBar', module).add('Default', () => {
  const title = text('Title', 'This is the title');
  const extraText = text('Extra Text', 'Extra Text');
  const appBarType = select(
    'Trade Type',
    {
      [AppBarType.PRIMARY]: AppBarType.PRIMARY,
      [AppBarType.SECONDARY]: AppBarType.SECONDARY
    },
    AppBarType.PRIMARY
  );
  return (
    <ThemeProvider>
      <Container>
        <AppBar title={title} appBarType={appBarType} extraText={extraText} />
      </Container>
    </ThemeProvider>
  );
});
