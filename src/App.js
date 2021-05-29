import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaginaInitiala from "./PaginaInitiala";
import PaginaNoua from "./PaginaNoua";

function App() {
  return (
    <>
      <Switch>
        <Route path="/maria">
          <PaginaNoua />
        </Route>
        <Route exact path="/">
          <PaginaInitiala color="green" />
        </Route>
        <Route path="/">
          <PaginaInitiala color="yellow" />
        </Route>
      </Switch>

      <p> Text afisat oricand </p>
    </>
  );
}

// schimbam culoarea paginii in functie de ruta

export default App;

// express.js - javascript
// django/flask - python
// ruby on rails - ruby

// server side rendering
// /user/profile/maria -> ruleaza functia cu tare ->
// sablon de pagina de profil
// request la baza de date pentru maria
// punem datele tale in sablon
// returnam pagina generata

// server side rendering
// request la https://infoarena.ro/arhiva?pagina=3&theme=dark

// https://infoarena.ro/arhiva?display_entries=50&first_entry=250

// Search Params

// // client side rendering
// // /user/profile/maria
// // ci generam din react cum ar trebui sa arate pagina de profil a ta
// // request la baza de date

// // 121.123.4.1/user/profile/maria.html
// // facebook.com - domeniul
// // /sadasd/dsadas/dsadasda - ruta

// /home/users/maria/documente/documentImportant

// // DNS - domain name service
// // IP - 101.32.43.1

// // v4 -> 4 miliarde de adrese
// // v6 -> infinit

// // facebook.com 121.123.4.1
// // DNS

// 8.8.8.8 - DNS Google

// {
//   facebook.com: 121.123.4.1
//   algoflow.ro: 12.44.66.12

// }
