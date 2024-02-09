import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Founders from "./components/pages/Founders";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/founders" component={Founders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
