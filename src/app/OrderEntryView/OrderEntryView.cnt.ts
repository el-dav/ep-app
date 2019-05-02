import { connect } from 'react-redux';

import { Order, NewOrderStatus } from 'types';
import { AppState, AppDispatch } from 'store';
import { submitOrder } from 'store/orders/actions';
import { setNewOrderStatus } from 'store/newOrder/actions';
import {
  selectStatusIsSubmitting,
  selectStatusError
} from 'store/newOrder/selectors';

import OrderEntryView from './OrderEntryView.cmp';

import { OwnProps, StateProps, DispatchProps } from './OrderEntryView.typ';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
  className: ownProps.className,
  isSubmitting: selectStatusIsSubmitting(state),
  orderError: selectStatusError(state)
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  onSubmitOrder: (order: Order) => {
    dispatch(submitOrder(order));
  },
  onErrorDismiss: () => {
    dispatch(
      setNewOrderStatus({
        status: NewOrderStatus.DEFAULT
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEntryView);
