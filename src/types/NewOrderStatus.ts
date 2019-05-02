export enum NewOrderStatus {
  DEFAULT = 'Default',
  SUBMITTING = 'Submitting',
  ERROR = 'Error'
}

export type ErrorNewOrderStatusUpdate = {
  status: NewOrderStatus.ERROR;
  message: string;
};

type OtherNewOrderStatusUpdate = {
  status: NewOrderStatus.SUBMITTING | NewOrderStatus.DEFAULT;
};

export type NewOrderStatusUpdate =
  | ErrorNewOrderStatusUpdate
  | OtherNewOrderStatusUpdate;
