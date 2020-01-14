import React from "react";
import "./App.css";
import salon from "./salong.json";
import List from "./Components/List";
import Salon from "./Components/Salon";
import { HashRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/salon/:id"
            render={props => <Salon {...props} salon={salon} />}
          ></Route>
          <Route path="/" render={props => <List {...props} salon={salon} />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
