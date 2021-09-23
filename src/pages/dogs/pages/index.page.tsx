import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "~common/routes";
import { Layout } from "~global/layout/Layout";
// import { useScrollToTop } from "~ui-toolkit/hooks/useScrollToTop";
import { BreedDetailsView } from "../views/BreedDetailsView";
import { BreedsView } from "../views/BreedsView";

export function Page() {
  // useScrollToTop();
  return (
    <Routes>
      <Route path={appRoutes.dogs()}>
        <Route path="/" element={<BreedsView />} />
        <Route path=":breedId" element={<BreedDetailsView />} />
      </Route>
    </Routes>
  );
}
