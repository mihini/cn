import React from "react";
import "./App.css";
import salon from "./salong.json";
import List from "./Components/List";
import Salon from "./Components/Salon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/salon/:id"
            render={props => <Salon {...props} salon={salon} />}
          ></Route>
          <Route path="/" render={props => <List {...props} salon={salon} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
