import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "themes/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import ChartMaker from "containers/Home/screens/ChartMaker/Injectable";

function Home() {
  return (
    <>
      <Switch>
        <Route exact path="/home/chartMaker" component={ChartMaker} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Home;
