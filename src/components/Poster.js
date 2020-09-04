import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";

function Poster(props) {
  return (
    <Jumbotron className="bg-grey jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-7">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.text && (
              <h3 className="display-4 font-weight-light">{props.text}</h3>
            )}
            {props.subtext && (
              <h5 className="display-6 font-weight-light">{props.subtext}</h5>
            )}
            {props.subtexttwo && (
              <h5 className="display-6 font-weight-light">
                {props.subtexttwo}
              </h5>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Poster;
