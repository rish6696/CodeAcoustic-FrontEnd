import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

interface Props {
  style?: React.CSSProperties;
  isLeft: boolean;
}

export default function _CloudComponent({ isLeft }: Props) {
  const baseUrl = "http://localhost:3000/";
  const imgPath = isLeft
    ? baseUrl + "cloudLeft.svg"
    : baseUrl + "cloudRight.svg";

  return (
    <div style={{marginTop:'20px',position:'absolute'}} >
      <img src={imgPath} style={{ width: "200px" }}></img>
      <div
        style={{
          position: "absolute",
          top: "30px",
          color: "wheat",
          fontSize: "10pt",
          left: "50px",
        }}
      >
        I did that code! <br></br>
        But How I did It ?
      </div>
    </div>
  );
}
