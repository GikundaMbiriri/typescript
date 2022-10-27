import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import Box from "./components/context/Box";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restrictions/RandomNumber";
import Toast from "./components/templateliterals/Toast";
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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={["Batman", "SuperMan", "Wonder", "Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Mbizzy",
            last: "Gikunda",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
    </div>
  );
}

export default App;
