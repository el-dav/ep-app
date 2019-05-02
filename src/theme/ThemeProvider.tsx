import React, { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import 'antd/dist/antd.css';

import { Theme, theme as appTheme } from './theme';
import GlobalStyles from './GlobalStyles';

type Props = {
  theme?: Theme;
};

const ThemeProvider: FC<Props> = ({ children, theme }) => (
  <EmotionThemeProvider theme={theme || appTheme}>
    <GlobalStyles />
    {children}
  </EmotionThemeProvider>
);

export default ThemeProvider;
