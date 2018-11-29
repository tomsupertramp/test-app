/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  issueDate: PropTypes.string,
  price: PropTypes.number,
  raiting: PropTypes.number,
  inStock: PropTypes.bool,
  image: PropTypes.string,
};

const ProductCard = ({
  name,
  color,
  issueDate,
  price,
  raiting,
  inStock,
  image,
}) => (
  <div>
    <div>Name: {name}</div>
    <div>Color: {color}</div>
    <div>Date: {issueDate}</div>
    <div>Price: {price}</div>
    <div>Raiting: {raiting}</div>
    <div>inStock: {inStock}</div>
    <div>Image: {image}</div>
  </div>
  // <Card>
  //   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  //   <CardBody>
  //     <CardTitle>Card title</CardTitle>
  //     <CardSubtitle>Card subtitle</CardSubtitle>
  //     <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
  //     <Button>Button</Button>
  //   </CardBody>
  // </Card>
);

ProductCard.propTypes = propTypes;

export default ProductCard;
