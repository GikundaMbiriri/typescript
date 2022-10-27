import React from "react";
import Greet from "../Greet";
function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  return <div>CustomComponent {props.name}</div>;
}

export default CustomComponent;
