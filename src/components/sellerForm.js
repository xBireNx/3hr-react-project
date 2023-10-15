import React, { useContext, useRef } from 'react';
import { cartContext } from '../store/cartContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function SellerForm() {
    const { addItemToCart } = useContext(cartContext);
    const tshirtRef = useRef(null)
    const descRef = useRef(null)
    const priceRef = useRef(null)
    const largeRef = useRef(null)
    const medRef = useRef(null)
    const smallRef = useRef(null)

    const handleAddItemToCart = () => {
        addItemToCart(
          tshirtRef.current.value,
          descRef.current.value,
          priceRef.current.value,
          largeRef.current.value,
          medRef.current.value,
          smallRef.current.value,
        );
      };
    
  return (
    <>
    <Row style={{padding:'1rem'}}>
        <Col md>
      <FloatingLabel
        controlId="floatingInput"
        label="Tshirt Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" ref={tshirtRef} />
      </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInput" label="Description">
        <Form.Control type="text" placeholder="Description" ref={descRef}/>
      </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInput" label="Price">
        <Form.Control type="number" placeholder="Price" ref={priceRef}/>
      </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInput" label="Large">
        <Form.Control type="number" placeholder="Large" ref={largeRef} />
      </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInput" label="Medium">
        <Form.Control type="number" placeholder="Medium" ref={medRef} />
      </FloatingLabel>
      </Col>
      <Col md>
      <FloatingLabel controlId="floatingInput" label="Small">
        <Form.Control type="number" placeholder="Small" ref={smallRef} />
      </FloatingLabel>
      </Col>
      <Col md>
      <Button variant = 'success' onClick={handleAddItemToCart}>Add</Button>
      </Col>
        
      
    </Row>
    
    </>
  );
}

export default SellerForm;