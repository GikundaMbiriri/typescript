import React from "react";

type InputProps = React.ComponentProps<"input">;
function Input(props: InputProps) {
  return <div {...props}>Input</div>;
}

export default Input;
