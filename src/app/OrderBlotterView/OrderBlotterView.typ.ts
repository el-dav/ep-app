import { Order } from 'types';

export type OwnProps = {
  className?: string;
};

export type StateProps = {
  className?: string;
  orders: Order[];
  lastUpdated: string;
};
export type DispatchProps = {};

export type Props = StateProps & DispatchProps;
