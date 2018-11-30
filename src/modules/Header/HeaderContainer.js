import { connect } from 'react-redux';

/* Components */
import HeaderComponent from './HeaderComponent';

const mapStateToProps = ({ cart: { items } }) => ({ cartItemsCount: items.length });

export default connect(mapStateToProps)(HeaderComponent);
