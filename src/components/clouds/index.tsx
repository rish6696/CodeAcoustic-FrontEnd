import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

interface Props {
  style?: React.CSSProperties;
  chat :string
}

export default function _CloudComponent({ style,chat }: Props) {
 
  return (
    <div
      style={{
        backgroundColor: "#341948",
        borderRadius: "50%",
        color: "wheat",
        textAlign: "center",
        paddingTop: "20px",
        marginTop:'25px',
        whiteSpace:'pre-line',
        marginLeft:'5px',
        marginRight:'5px',
        ...style
      }}
    >
      {chat}
    </div>
  );
}
