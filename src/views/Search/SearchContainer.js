import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

/* Actions */
import { actions } from './ducks';

/* Components */
import SearchComponent from './SearchComponent';

const mapStateToProps = ({ search: { products } }) => ({ products });

const mapDispatchToProps = dispatch => ({
  fetchProducts: filter => dispatch(actions.fetchProducts(filter)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { fetchProducts } = this.props;
      fetchProducts();
    },
  }),
)(SearchComponent);
