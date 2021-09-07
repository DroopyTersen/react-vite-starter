import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../common/routes";
import { Layout } from "~global/layout/Layout";

export const CatsView = () => {
  return (
    <Layout>
      <h1>Cats</h1>
      <p>
        This view hasn't been implemented. But it'd be the same as the{" "}
        <Link to={appRoutes.dogs()}>dogs</Link>.
      </p>
    </Layout>
  );
};
