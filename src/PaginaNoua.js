import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, useHistory } from "react-router-dom";
import PaginaInitiala from "./PaginaInitiala";
import LinkCuReact from "./LinkCuReact";

function PaginaNoua() {
  return (
    <>
      <Route exact path="/maria/paginaNoua">
        <p> Pagina Noua</p>
      </Route>
      <p> Pagina Mariei </p>
      <LinkCuReact />
      <Link to="/"> Spre pagina initiala </Link>
      <a href="/">Spre pagina initiala</a>
    </>
  );
}

export default PaginaNoua;
