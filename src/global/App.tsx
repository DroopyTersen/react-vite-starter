import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "~common/routes";
import { BreedsView } from "~features/dogs/views/BreedsView";
import { BreedDetailsView } from "~features/dogs/views/BreedDetailsView";
import { HomeView } from "~features/home/views/HomeView";
import "./styles/global.scss";
import { CatsView } from "~features/cats/views/CatsView";
import { useScrollToTop } from "~ui-toolkit/hooks/useScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="*" element={<HomeView />} />
      <Route path={appRoutes.dogs()}>
        <Route path="/" element={<BreedsView />} />
        <Route path=":breedId" element={<BreedDetailsView />} />
      </Route>
      <Route path={appRoutes.cats()}>
        <Route path="/" element={<CatsView />} />
      </Route>
    </Routes>
  );
}
export default App;
