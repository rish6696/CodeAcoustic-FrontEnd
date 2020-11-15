import React from "react";
import FLexLayout from "../FlexLayout";
import { Col, Container, Image, Row } from "react-bootstrap";
import CloudComponent from '../clouds/index'

export default function _WhyUSComponent() {

    const image ='http://localhost:3000/whyus.svg'
  return (
    <Container fluid >
      <Row noGutters={true} style={{marginTop:'20px'}} >
          <Col xs={12} md={6}  >
             <Image src='/whyUs.svg'></Image>
          </Col>  
          <Col xs={12} md={6} style={{backgroundColor:'#A16AE8',  }}  >
             <CloudComponent isLeft={true} ></CloudComponent>
          </Col> 
      </Row>
    </Container>
  );
}
