import React from "react";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects/Projects";
import ContactUs from "./component/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
