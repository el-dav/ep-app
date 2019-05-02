import React, { FC } from 'react';

import { Section, OrderEntryPanel } from 'assets';

import { Props } from './OrderEntryView.typ';

const OrderEntryView: FC<Props> = ({
  className,
  onSubmitOrder,
  isSubmitting,
  orderError,
  onErrorDismiss
}) => (
  <Section className={`${className || ''}`}>
    <OrderEntryPanel
      isSubmitting={isSubmitting}
      onSubmit={onSubmitOrder}
      orderError={orderError}
      onErrorDismiss={onErrorDismiss}
    />
  </Section>
);

export default OrderEntryView;
