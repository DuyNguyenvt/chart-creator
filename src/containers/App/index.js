import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
// import logo from "components/Icons/ReactLogo/logo.svg";
import "themes/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import TestSeedScreen from "containers/App/screens/TestSeedScreen/Injectable";
import MyProfile from "containers/App/screens/MyProfile";
import history from "utils/history";
import Home from "containers/Home/Injectable";
// import config from "global-config";

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
