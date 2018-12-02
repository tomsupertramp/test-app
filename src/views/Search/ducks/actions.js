import { filter } from 'lodash';
import moment from 'moment';

/* Types */
import types from './types';

/* Data */
import data from '../data.json';

const fetchProducts = (params) => {
  let products = data;

  if (params) {
    const {
      inStock,
      color,
      priceFrom,
      priceTo,
      dateFrom,
      dateTo,
    } = params;

    products = filter(data, (item) => {
      const colorFilter = !color || color === item.color;
      const inStockFilter = inStock === item.inStock || inStock === false;
      const priceFilter = () => {
        if (!priceTo && !priceFrom) {
          return true;
        }

        if (!priceTo) {
          return item.price >= priceFrom;
        }

        if (!priceFrom) {
          return item.price <= priceTo;
        }

        return item.price >= priceFrom && item.price <= priceTo;
      };

      const issueDateFilter = () => {
        const date = moment(item.issueDate, 'MM-DD-YYYY');

        if (!params.dateFrom && !params.dateTo) {
          return true;
        }

        if (!params.dateTo) {
          return moment(date).isSameOrAfter(dateFrom);
        }

        if (!params.dateFrom) {
          return moment(date).isSameOrBefore(dateTo);
        }

        return moment(date).isBetween(dateFrom, dateTo);
      };

      return colorFilter && inStockFilter && priceFilter() && issueDateFilter();
    });
  }


  return { type: types.FETCH_PRODUCTS, products };
};

export default {
  fetchProducts,
};
