import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import "themes/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import TestSeedScreen from "containers/App/screens/TestSeedScreen/Injectable";
import MyProfile from "containers/App/screens/MyProfile";
import history from "utils/history";
import Home from "containers/Home/Injectable";

function App() {
  console.log("history", history);
  return (
    <>
      <Switch>
        <Route exact path="/" component={TestSeedScreen} />
        <Route exact path="/author/profile" component={MyProfile} />
        <Route path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
