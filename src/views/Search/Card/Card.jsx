/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardColumns,
  CardDeck,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
}) => (
  <Card className="card">
    <Row>
      <Col xs="3" className="card-container"><CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" className="card-image" /></Col>
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
            <Col><Button onClick={handleClick}>Order</Button></Col>
          </Row>
        </CardBody>
      </Col>
    </Row>
  </Card>
);

ProductCard.propTypes = propTypes;

export default ProductCard;
