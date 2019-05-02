import React, { FC, useState } from 'react';
import { InputNumber, Form, Select, Input } from 'antd';

import {
  AppBar,
  AppBarType,
  TradeTypeSelect,
  SymbolSelect,
  SubmitButton,
  ErrorOverlay
} from 'assets';
import { styled } from 'theme';
import { TradeType, OrderType, TIF, Order } from 'types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const PanelContainer = styled.div`
  max-width: 600px;
  min-width: 500px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  overflow: hidden;
`;

const FormContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.unit * 2}px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin: 0 5px;
  }
  height: 80px;
  .ant-form-item-label {
    line-height: 20px;
    font-weight: bold;
  }
`;

const Flex = styled.div`
  flex: 1;
`;

const OrderTypeSelect = styled(Select)`
  width: 100px;
`;

type Props = {
  className?: string;
  isSubmitting: boolean;
  onSubmit: (order: Order) => void;
  orderError: string;
  onErrorDismiss: () => void;
};

const OrderEntryPanel: FC<Props> = ({
  className,
  isSubmitting,
  onSubmit,
  orderError,
  onErrorDismiss
}) => {
  const [tradeType, setTradeType] = useState<TradeType>(TradeType.BUY);
  const [symbol, setSymbol] = useState<string>('');
  const [qty, setQty] = useState<number>(1);
  const [price, setPrice] = useState<number>(1);
  const [stopPrice, setStopPrice] = useState<number>(1);
  const [orderType, setOrderType] = useState<OrderType>(OrderType.MARKET);
  const [tif, setTif] = useState<TIF>(TIF.GTC);
  const [comment, setComment] = useState<string>('');

  const submitIsEnabled =
    !isSubmitting &&
    tradeType &&
    symbol &&
    qty &&
    price &&
    stopPrice &&
    orderType &&
    tif;

  return (
    <Container className={`${className || ''}`}>
      <PanelContainer>
        <AppBar title="Create new order" appBarType={AppBarType.SECONDARY} />
        <FormContainer>
          <Row>
            <TradeTypeSelect
              value={tradeType}
              onChange={(value: TradeType) => {
                setTradeType(value);
              }}
            />
            <SymbolSelect
              value={symbol}
              onSelect={(value: string) => {
                setSymbol(value);
              }}
            />
            <Form.Item label="Qty">
              <InputNumber
                min={1}
                max={999}
                value={qty}
                onChange={value => {
                  setQty(value || 1);
                }}
              />
            </Form.Item>
            <Flex />
            <Form.Item label="Price">
              <InputNumber
                min={0.01}
                value={price}
                precision={2}
                onChange={value => {
                  setPrice(value || 1);
                }}
                step={0.01}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Order Type">
              <OrderTypeSelect
                value={orderType}
                onSelect={(value: any) => {
                  setOrderType(value);
                }}
              >
                {Object.values(OrderType).map((value: string) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </OrderTypeSelect>
            </Form.Item>
            <Form.Item label="TIF">
              <OrderTypeSelect
                value={tif}
                onSelect={(value: any) => {
                  setTif(value);
                }}
              >
                {Object.values(TIF).map((value: string) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </OrderTypeSelect>
            </Form.Item>
            <Flex />
            <Form.Item label="Stop Price">
              <InputNumber
                min={0.01}
                value={stopPrice}
                precision={2}
                onChange={value => {
                  setStopPrice(value || 1);
                }}
                step={0.01}
              />
            </Form.Item>
          </Row>
          <Row>
            <Input.TextArea
              rows={4}
              placeholder="Comment"
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
            />
          </Row>

          <Row>
            <Flex />
            <SubmitButton
              isDisabled={!submitIsEnabled}
              isSubmitting={isSubmitting}
              onSubmit={() => {
                onSubmit({
                  tradeType,
                  symbol,
                  qty,
                  price,
                  orderType,
                  tif,
                  stopPrice,
                  comment: comment || undefined
                });
              }}
            />
          </Row>
          <ErrorOverlay
            isShown={!!orderError}
            onDissmiss={onErrorDismiss}
            errorMessage={orderError}
          />
        </FormContainer>
      </PanelContainer>
    </Container>
  );
};

export default OrderEntryPanel;
