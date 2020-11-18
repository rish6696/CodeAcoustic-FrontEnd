import React, { useEffect, useState } from "react";
import FLexLayout from "../FlexLayout";
import { Col, Container, Image, Row } from "react-bootstrap";
import CloudComponent from "../clouds/index";
import Bubble from "../Bubble/index";

export default function _WhyUSComponent() {
  const image = "http://localhost:3000/saveCard.svg";

  const bubbleChat = [
    {
      text: `I did that code! \n But How I did It ?`,
      style: { height: "100px", width: "200px" },
    },
    {
      text: `Don't worry, CodeAcoustic \n will  help you remember`,
      style: { height: "100px", width: "250px" },
    },
    {
      text: `But How ?`,
      style: { height: "50px", width: "100px", paddingTop: "10px" },
    },
    {
      text: `We let you make AUDIO \n notes`,
      style: { height: "100px", width: "250px" },
    },
    {
      text: `That’s What \n I am looking for`,
      style: { height: "100px", width: "250px" },
    },
  ];

  const getChatSection = () => {
    return bubbleChat.map((chat, i) => {
      if (i % 2 == 0) {
        return (
          <FLexLayout rowORColumn="row" justifyContent="between">
            <CloudComponent
              style={chat.style}
              chat={chat.text}
            ></CloudComponent>
            <Bubble></Bubble>
          </FLexLayout>
        );
      } else {
        return (
          <FLexLayout rowORColumn="row" justifyContent="between">
            <Bubble></Bubble>
            <CloudComponent
              style={chat.style}
              chat={chat.text}
            ></CloudComponent>
          </FLexLayout>
        );
      }
    });
  };

  return (
    <Container fluid>
      <Row noGutters={true} style={{ marginTop: "20px"}}>
        <Col xs={12} md={6}>
          <Image fluid src="/whyUs.svg"></Image>
        </Col>
        <Col xs={12} md={6} style={{ backgroundColor: "#A16AE8" }}>
          {getChatSection()}
        </Col>
      </Row>
    </Container>
  );
}
