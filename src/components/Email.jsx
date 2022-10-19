import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Email() {
  const { email } = useContext(MyContext);
  return (
    <>
      {email.map((element) => (
        <h1 className={element.status === 0 ? "resolver" : "resolvido"}>
          {element.title}
        </h1>
      ))}
    </>
  );
}

export default Email;
