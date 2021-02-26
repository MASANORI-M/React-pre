import React from "react";

const ColorfulMsg = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "36px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMsg;
