import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailCointainer/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/test">
          <ItemDetailContainer/>
        </Route>
        <Route path="/">
          <ItemListContainer prueba="PROBANDO 1 2 3 " alo="CREO QUE ME RESULTO :v"/> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
