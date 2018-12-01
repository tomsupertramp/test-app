import { connect } from 'react-redux';

/* Actions */
import { actions } from './ducks';

/* Components */
import CartComponent from './CartComponent';

const mapStateToProps = ({ cart: { isOpen, items } }) => ({ isOpen, items });
const mapDispatchToProps = dispatch => ({ toggleCartModal: () => dispatch(actions.toggleCartModal()) });

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
