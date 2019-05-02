import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, styled } from 'theme';

import ErrorOverlay from './ErrorOverlay.cmp';

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

storiesOf('ErrorOverlay', module).add('Default', () => {
  const errorMessage = text('Error Message', 'Order Time has Elapsed =`(');
  const isShown = boolean('Is Shown?', true);
  const onDissmiss = action('onDissmiss');

  return (
    <ThemeProvider>
      <Container>
        <ErrorOverlay
          errorMessage={errorMessage}
          onDissmiss={onDissmiss}
          isShown={isShown}
        />
      </Container>
    </ThemeProvider>
  );
});
