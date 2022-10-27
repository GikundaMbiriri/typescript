import React from "react";
type ContainerProps = {
  styles: React.CSSProperties;
};
function Container(props: ContainerProps) {
  return <div style={props.styles}>container</div>;
}

export default Container;
