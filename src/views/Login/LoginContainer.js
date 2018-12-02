import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

/* Actions */
import { actions } from 'services/ducks';

/* Components */
import LoginComponent from './LoginComponent';

const schema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const mapStateToProps = ({ services: { error } }) => ({
  error,
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actions.login(values)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({
      username: '',
      password: '',
    }),
    handleSubmit: (values, { props: { login } }) => {
      login(values);
    },
    validationSchema: schema,
  }),
)(LoginComponent);
