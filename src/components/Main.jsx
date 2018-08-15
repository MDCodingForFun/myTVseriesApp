import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "./Series";
import SingleSeries from "./singleSeries";

export default function Main(props) {
  // console.log("MAIN", props);
  return (
    <Switch>
      <Route exact path="/" component={Series} />
      <Route path="/series/:id" component={SingleSeries} />
    </Switch>
  );
}
