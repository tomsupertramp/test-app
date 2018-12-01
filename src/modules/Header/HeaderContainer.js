import { connect } from 'react-redux';

/* Actions */
import { actions as cartActions } from 'modules/Cart/ducks';

/* Components */
import HeaderComponent from './HeaderComponent';

const mapStateToProps = ({ cart: { items }, services: { isAuthenticated, user } }) => ({
  cartItemsCount: items.length,
  isAuthenticated,
  user,
});
const mapDispatchToProps = dispatch => ({
  toggleCartModal: () => dispatch(cartActions.toggleCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
