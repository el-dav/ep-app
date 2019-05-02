import React, { FC } from 'react';

import { OrderBlotter, Section, AppBar, AppBarType } from 'assets';

import { Props } from './OrderBlotterView.typ';

const OrderBlotterView: FC<Props> = ({ className, orders, lastUpdated }) => (
  <Section className={`${className || ''}`}>
    <AppBar
      title="Blotter"
      appBarType={AppBarType.SECONDARY}
      extraText={
        lastUpdated.length ? `Last Updated: ${lastUpdated}` : undefined
      }
    />
    <OrderBlotter orders={orders} />
  </Section>
);

export default OrderBlotterView;
