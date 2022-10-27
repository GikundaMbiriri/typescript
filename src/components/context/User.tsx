import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Mbizzy",
        email: "mbizzy@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div className="">User name is{userContext.user?.name}</div>
      <div className="">User email is {userContext.user?.email}</div>
    </div>
  );
}

export default User;
