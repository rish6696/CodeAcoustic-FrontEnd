import React from "react";

interface Props {
  style?: React.CSSProperties;
}

export default function _BubbleComponent({ style }: Props) {
 
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "rgb(188,58,128,10%)",
        borderRadius: "50%",
      }}
    >
    </div>
  );
}
