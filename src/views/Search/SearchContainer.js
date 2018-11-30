import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

/* Actions */
import { actions } from './ducks';
import { actions as cartActions } from 'modules/Cart/ducks';

/* Components */
import SearchComponent from './SearchComponent';

const mapStateToProps = ({ search: { products } }) => ({ products });

const mapDispatchToProps = dispatch => ({
  fetchProducts: filter => dispatch(actions.fetchProducts(filter)),
  updateCart: item => dispatch(cartActions.updateCart(item)),
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
