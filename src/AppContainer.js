import { connect } from 'react-redux';

/* Component */
import AppComponent from './AppComponent';

const mapStateToProps = ({ services: { isAuthenticated } }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(AppComponent);
