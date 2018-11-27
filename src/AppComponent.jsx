import React from 'react';

/* Modules */
import Header from 'modules/Header';
import { Container, Col, Row } from 'reactstrap';

const AppComponent = () => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
  </Container>
);

export default AppComponent;
