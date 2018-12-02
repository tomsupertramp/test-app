import { connect } from 'react-redux';

/* Components */
import HomeComponent from './HomeComponent';

const mapStateToProps = ({ routing: { location } }) => ({
  location,
});

export default connect(mapStateToProps)(HomeComponent);
