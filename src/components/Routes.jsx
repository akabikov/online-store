import React, { Suspense, lazy, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./Loader";
import pages from "../pages";

export default function Routes() {
  const routes = useMemo(
    () =>
      pages.map(({ page, path }) => (
        <Route
          key={page}
          exact={Boolean(path)}
          path={path}
          component={lazy(() => import(`../pages/${page}`))}
        />
      )),
    []
  );

  return (
    <Suspense fallback={<Loader />}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
}
