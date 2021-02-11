import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");
import moment from "moment";

function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"))

// getUsers().then(json => console.log(json));

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});
