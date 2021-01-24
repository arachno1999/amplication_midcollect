import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { GoodList } from "./GoodList";
import { CreateGood } from "./CreateGood";
import { Good } from "./Good";

export const GoodIndex = (): React.ReactElement => {
  useBreadcrumbs("/goods/", "Goods");

  return (
    <Switch>
      <PrivateRoute exact path={"/goods/"} component={GoodList} />
      <PrivateRoute path={"/goods/new"} component={CreateGood} />
      <PrivateRoute path={"/goods/:id"} component={Good} />
    </Switch>
  );
};
