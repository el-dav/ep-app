import { connect } from 'react-redux';

import { AppState } from 'store';
import { selectOrders } from 'store/orders/selectors';
import { selectLastUpdated } from 'store/newOrder/selectors';

import OrderBlotterView from './OrderBlotterView.cmp';

import { OwnProps, StateProps } from './OrderBlotterView.typ';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
  className: ownProps.className,
  orders: selectOrders(state),
  lastUpdated: selectLastUpdated(state)
});

export default connect(mapStateToProps)(OrderBlotterView);
