import { Order } from 'types';

export type OwnProps = {
  className?: string;
};

export type StateProps = {
  className?: string;
  isSubmitting: boolean;
  orderError: string;
};

export type DispatchProps = {
  onSubmitOrder: (order: Order) => void;
  onErrorDismiss: () => void;
};

export type Props = StateProps & DispatchProps;
