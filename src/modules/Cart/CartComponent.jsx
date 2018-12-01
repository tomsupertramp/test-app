import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { map } from 'lodash';

/* Components */
import Card from 'components/Card';

const propTypes = {
  isOpen: PropTypes.bool,
  toggleCartModal: PropTypes.func,
  items: PropTypes.array,
};

const Cart = ({ isOpen, toggleCartModal, items }) => (
  <Modal isOpen={isOpen} toggle={toggleCartModal} size="lg">
    <ModalHeader toggle={toggleCartModal}>Cart</ModalHeader>
    <ModalBody>
      {items.length === 0 ? (
        <div>No items</div>
      ) : map(items, item => (
        <Card
          key={item.id}
          {...item}
          isCart
        />
      ))}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => toggleCartModal()}>Close</Button>
    </ModalFooter>
  </Modal>
);

Cart.propTypes = propTypes;

export default Cart;
