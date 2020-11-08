import React from "react";

import { Image } from "react-bootstrap";

function BackGround() {
  return (
    <Image
      style={{
        position: "fixed",
        margin: "auto",
        top: "0px",
        zIndex:-1,
        
      }}
      src='/landingBackground.svg'
    />
  );
}

export default BackGround;
