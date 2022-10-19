import React, { useState } from "react";
import MyContext from "./MyContext";

const INITIAL_STATE = [
  {
    id: 1,
    title: "Título do email",
    status: 0,
  },
];

function Provider({ children }) {
  const [email, setEmail] = useState(INITIAL_STATE);

  const value = {
    email,
    setEmail,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default Provider;
