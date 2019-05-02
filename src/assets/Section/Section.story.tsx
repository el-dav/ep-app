import React from 'react';
import SplitPane from 'react-split-pane';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, styled } from 'theme';

import Section from './Section.cmp';

const Section1 = styled(Section)`
  background-color: grey;
`;
const Section2 = styled(Section)`
  background-color: coral;
`;

storiesOf('Section', module).add('Default', () => {
  return (
    <ThemeProvider>
      <SplitPane minSize={300} split="horizontal">
        <Section1 />
        <Section2 />
      </SplitPane>
    </ThemeProvider>
  );
});
