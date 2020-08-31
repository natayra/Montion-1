import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register1 from "./components/Register1/register1";
import Register2 from "./components/Register2/register2";
import Register3 from "./components/Register3/register3";
import Feed from "./components/Feed";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login/" component={Login}/>
          <Route exact path="/register" component={Register1}/>
          <Route exact path="/register2" component={Register2}/>
          <Route exact path="/register3" component={Register3}/>
          <Route exact path="/feed" component={Feed}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
