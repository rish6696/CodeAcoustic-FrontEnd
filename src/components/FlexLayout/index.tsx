import React from "react";

interface Props {
  style?: React.CSSProperties;
  justifyContent?: string;
  rowORColumn: string;
  alignItem?: string;
  onClick?: string;
  children:JSX.Element |JSX.Element[]
}

export default function FLexLayout(props: Props) {
  const { style, justifyContent, rowORColumn, alignItem, onClick } = props;
  return (
    <div

      style={{ ...style }}
      className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent}`}
    >
      {props.children}
    </div>
  );
}

