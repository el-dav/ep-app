import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeProvider from './ThemeProvider';
import styled from './styled';

const Text = styled.p`
  color: ${({ theme }) => theme.palette.primary};
`;

storiesOf('ThemeProvider', module).add('Default', () => (
  <ThemeProvider>
    <Text>Hi</Text>
  </ThemeProvider>
));
