import React from "react";
import logo from "./logo.svg";
import "./App.css";
import salon from "./salong.json";
import List from "./Components/List";
import Salon from "./Components/Salon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
        {/* <List salon={salon}></List> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </Router>
    </div>
  );
};

export default App;
