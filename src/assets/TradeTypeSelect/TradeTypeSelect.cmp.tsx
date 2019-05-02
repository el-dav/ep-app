import React, { FC } from 'react';
import { Select, Form } from 'antd';
import { withTheme } from 'emotion-theming';

import { Theme, styled } from 'theme';
import { TradeType } from 'types';

type StyledSelectProps = {
  tradeType: TradeType;
};

const StyledSelect = styled(Select)<StyledSelectProps>`
  .ant-select-selection {
    background-color: ${({ theme, tradeType }) =>
      tradeType === TradeType.BUY
        ? theme.palette.buy.main
        : theme.palette.sell.main};
    color: ${({ theme, tradeType }) =>
      tradeType === TradeType.BUY
        ? theme.palette.buy.contrastText
        : theme.palette.sell.contrastText};
  }
  i {
    color: ${({ theme, tradeType }) =>
      tradeType === TradeType.BUY
        ? theme.palette.buy.contrastText
        : theme.palette.sell.contrastText};
  }
`;

const getStyle = (tradeType: TradeType, theme: Theme) =>
  tradeType === TradeType.BUY
    ? {
        background: theme.palette.buy.main,
        color: theme.palette.buy.contrastText
      }
    : {
        background: theme.palette.sell.main,
        color: theme.palette.sell.contrastText
      };

type Props = {
  className?: string;
  value: TradeType;
  // had some toruble with getting the appropriate type for this
  onChange: (tradeType: any) => void;
};

const TradeTypeSelect: FC<Props & { theme?: Theme }> = ({
  className,
  theme,
  value = TradeType.BUY,
  onChange
}) => {
  const buyStyle = getStyle(TradeType.BUY, theme!);
  const sellStyle = getStyle(TradeType.SELL, theme!);
  return (
    <Form.Item label="Action">
      <StyledSelect
        tradeType={value}
        value={value}
        className={`${className || ''}`}
        onChange={onChange}
      >
        <Select.Option style={buyStyle} value={TradeType.BUY}>
          {TradeType.BUY}
        </Select.Option>
        <Select.Option value={TradeType.SELL} style={sellStyle}>
          {TradeType.SELL}
        </Select.Option>
      </StyledSelect>
    </Form.Item>
  );
};

export default withTheme(TradeTypeSelect);
