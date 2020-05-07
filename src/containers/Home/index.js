import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ChartMaker from "containers/Home/screens/ChartMaker/Injectable";

function Home() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ChartMaker} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Home;
