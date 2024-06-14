import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Founders from "./pages/Founders";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Recognitions from "./pages/Recognitions";
import Partners from "./pages/Partners";
import Finance from "./pages/Finance";
import Change from "./pages/Change";
import Women from "./pages/Women";
import Otb from "./pages/Otb";
import Volunteers from "./pages/Volunteers";
import Donate from "./pages/Donate";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/founders" component={Founders} />
          <Route exact path="/about" component={About} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/recognitions" component={Recognitions} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/finance" component={Finance} />
          <Route exact path="/change" component={Change} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/otb" component={Otb} />
          <Route exact path="/volunteers" component={Volunteers} />
          <Route exact path="/donate" component={Donate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
