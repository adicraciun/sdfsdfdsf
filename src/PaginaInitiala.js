import logo from "./logo.svg";
import "./App.css";
import LinkCuReact from "./LinkCuReact";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function PaginaInitiala({ color }) {
  let [secunde, setSecunde] = useState(5);
  let history = useHistory();

  console.log(history.location);
  useEffect(() => {
    if (secunde === 0) {
      // history.push("/maria");
    }
    setTimeout(() => setSecunde(secunde - 1), 1000);
  }, [secunde]);

  // let color;

  // if (history.location.pathname === "/") color = "green";
  // else color = "yellow";

  return (
    <div className="App-Boss">
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="test">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkCuReact />
        <Link to="/maria">Spre pagina mariei</Link>
        <a href="/maria">Spre pagiddna mariei</a>
        <Link to="/dadas">Spre pagina care nu e initiala </Link>
        <a href="/dadas">Spre pagina care nu e initiala </a>

        <p>
          {" "}
          Au mai ramas {secunde} secunde pana la redirect pe pagina mariei{" "}
        </p>
      </header>
    </div>
  );
}

export default PaginaInitiala;

// server local care returneaza aplicatia react
// localhost -> IPul local

// request la localhost:3000/maria
// serverul primeste request "vreau pagina cu pathul /maria"
// mereu returneaza aplicatia ta react

//  request la netlify "blabla.netlify.com/maria"
// serverul primeste request "vreau pagina cu pathul /maria"
// returneaza not found
