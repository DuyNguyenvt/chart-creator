import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "themes/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import TestSeedScreen from "containers/App/screens/TestSeedScreen/Injectable";
import MyProfile from "containers/App/screens/MyProfile";
import Home from "containers/Home/Injectable";

function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={TestSeedScreen} />
        <Route exact path="/author/profile" component={MyProfile} /> */}
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
