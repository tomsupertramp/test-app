import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

/* Actions */
import { actions } from 'services/ducks';

/* Components */
import SignupComponent from './SignupComponent';

const schema = Yup.object().shape({
  username: Yup.string()
    .min(6)
    .required('Required'),
  password: Yup.string().required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const mapStateToProps = ({ services: { error, successSignup } }) => ({
  error,
  successSignup,
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(actions.signup(values)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({
      username: '',
      password: '',
      passwordConfirm: '',
    }),
    handleSubmit: (values, { props: { signup } }) => {
      signup(values);
    },
    validationSchema: schema,
  }),
)(SignupComponent);
