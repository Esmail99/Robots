import React from "react";

type props = {
  children?: JSX.Element;
};
const Scroll = (props: props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
