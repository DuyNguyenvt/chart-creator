import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "themes/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
// import TestSeedScreen from "containers/App/screens/TestSeedScreen/Injectable";
import MyProfile from "containers/App/screens/MyProfile";
import ChartMaker from "containers/Home/screens/ChartMaker/Injectable";

function Home() {
  return (
    <>
      <Switch>
        <Route path="/home/chartMaker" component={ChartMaker} />
      </Switch>
    </>
  );
}

export default Home;
