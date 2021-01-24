import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { TypeList } from "./TypeList";
import { CreateType } from "./CreateType";
import { Type } from "./Type";

export const TypeIndex = (): React.ReactElement => {
  useBreadcrumbs("/types/", "Types");

  return (
    <Switch>
      <PrivateRoute exact path={"/types/"} component={TypeList} />
      <PrivateRoute path={"/types/new"} component={CreateType} />
      <PrivateRoute path={"/types/:id"} component={Type} />
    </Switch>
  );
};
