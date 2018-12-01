import { connect } from 'react-redux';

/* Actions */
import { actions } from 'services/ducks';

/* Components */
import LoginComponent from './LoginComponent';

const mapStateToProps = ({ services: { error } }) => ({
  error,
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actions.login(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
