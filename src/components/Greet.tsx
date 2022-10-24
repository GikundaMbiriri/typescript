import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  //default prop
  const { messageCount = 0 } = props;
  return (
    <div>
      {(props.isLoggedIn && (
        <h2>
          Welcome {props.name}! We have {messageCount} unread messages.
        </h2>
      )) || <h2>Welcome guest.</h2>}
    </div>
  );
}

export default Greet;
