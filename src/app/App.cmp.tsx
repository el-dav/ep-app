import React, { FC } from 'react';
import SplitPane from 'react-split-pane';

import { ThemeProvider, styled } from 'theme';
import { Store, AppBar } from 'assets';

import { OrderBlotterView } from './OrderBlotterView';
import { OrderEntryView } from './OrderEntryView';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  flex: 1;
`;

export const App: FC = () => (
  <Store>
    <ThemeProvider>
      <AppContainer>
        <AppBar title="EXD Trader" />
        <Container>
          <SplitPane split="horizontal" primary="first" minSize={400}>
            <OrderEntryView />
            <OrderBlotterView />
          </SplitPane>
        </Container>
      </AppContainer>
    </ThemeProvider>
  </Store>
);

export default App;
