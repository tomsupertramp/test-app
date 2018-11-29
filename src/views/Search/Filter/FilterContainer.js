import { connect } from 'react-redux';

/* Component */
import FilterComponent from './FilterComponent';

const mapDispatchToProps = dispatch => ({
  onSubmit: e => console.log(e),
});

export default connect(null, mapDispatchToProps)(FilterComponent);
