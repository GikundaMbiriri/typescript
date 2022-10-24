import React from "react";

type PersonListProps = {
  names: {
    first: String;
    last: String;
  }[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonList;
