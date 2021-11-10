import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailCointainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/> 
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer/> 
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
