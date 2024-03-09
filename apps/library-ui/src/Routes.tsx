import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
