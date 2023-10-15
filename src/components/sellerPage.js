import React, { useContext } from "react";
import { cartContext } from "../store/cartContext";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

export default function SellerPage() {
  const { state} =
    useContext(cartContext);
    

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Items in Cart</h1>
      <ul>
        <Row style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          <Col sm>Tshirt Name</Col>
          <Col sm>Description</Col>
          <Col sm>Price</Col>
          <Col md>Large Size</Col>
          <Col md>Medium Size</Col>
          <Col md>Small Size</Col>
        </Row>
      </ul>
      <ul>
        {state.map((item, index) => (
          <Row key={index} style={{ marginBottom: "1rem" }}>
            <Col sm>{item.name}</Col>
            <Col sm>{item.description}</Col>
            <Col sm>Rs.{item.price}</Col>
            <Col md>
              <Button 
                variant="primary" 
               
              >
                Large <Badge bg="secondary">{item.large}</Badge>
              </Button>
              
            </Col>
            <Col md>
              <Button
                variant="primary"
                
                
              >
                Medium <Badge bg="secondary">{item.medium}</Badge>
              </Button>
            </Col>
            <Col md>
              <Button
                variant="primary"
              >
                Small <Badge bg="secondary">{item.small}</Badge>
              </Button>
            </Col>
          </Row>
        ))}
      </ul>
    </div>
  );
}
