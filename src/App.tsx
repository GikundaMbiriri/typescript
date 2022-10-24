import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Peter",
      last: "Mbizzy",
    },
    {
      first: "Gikunda",
      last: "Mbiriri",
    },
  ];
  return (
    <div className="App">
      {/* <h2>Lesson one</h2> */}
      {/* <Greet name="Peter" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <h2>Lesson Two</h2> */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Greet name="Peter" isLoggedIn={false} />
      <Oscar>
        <Heading>Oscar goes Here</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default App;
