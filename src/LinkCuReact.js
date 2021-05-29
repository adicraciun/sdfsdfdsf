import React from "react";
import { useHistory } from "react-router";

function LinkCuReact() {
  let history = useHistory();

  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React {history.location.pathname}
    </a>
  );
}

export default LinkCuReact;
