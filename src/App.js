import "./App.css";
import React, { useState } from "react";
import Nav from "./Nav";
import Car from "./Car";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/car" component={Car} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
