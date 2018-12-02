/* eslint react/jsx-one-expression-per-line:0 */

import PropTypes from 'prop-types';
import React from 'react';
import StarRatings from 'react-star-ratings';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  Row,
  Col,
} from 'reactstrap';

const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  issueDate: PropTypes.string,
  price: PropTypes.number,
  raiting: PropTypes.number,
  inStock: PropTypes.bool,
  image: PropTypes.string,
  handleClick: PropTypes.func,
  isCart: PropTypes.bool,
};

const ProductCard = ({
  name,
  color,
  issueDate,
  price,
  raiting,
  inStock,
  image,
  handleClick,
  isCart,
}) => (
  <Card className="card">
    <Row>
      <Col xs="3" className="card-container"><CardImg src={image} alt="Card image cap" className="card-image" /></Col>
      <Col>
        <CardBody>
          <Row>
            <Col><CardText>Name: {name}</CardText></Col>
            <Col><CardText>IssueDate: {issueDate}</CardText></Col>
            <Col><CardText>Price: ${price}</CardText></Col>
          </Row>
          <Row>
            <Col><CardText>Color: {color}</CardText></Col>
            <Col><CardText>InStock: {inStock ? 'Yes' : 'No'}</CardText></Col>
            {!isCart && <Col><Button onClick={handleClick}>Order</Button></Col>}
          </Row>
          <Row>
            <Col>
              <StarRatings
                rating={raiting}
                starDimension="20px"
                starSpacing="2px"
              />
            </Col>
          </Row>
        </CardBody>
      </Col>
    </Row>
  </Card>
);

ProductCard.propTypes = propTypes;

export default ProductCard;
