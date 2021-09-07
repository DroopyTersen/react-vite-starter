import React from "react";
import { Layout } from "~global/layout/Layout";
import { AsyncData } from "~ui-toolkit/components/AsyncData/AsyncData";
import { BreedsGrid } from "../components/BreedsGrid";
import { fetchDogBreeds } from "../dogs.data";

export const BreedsView = () => {
  return (
    <Layout>
      <h1>Dog Breeds</h1>
      <AsyncData asyncFn={fetchDogBreeds} params={["nothing"]}>
        {(data) => <BreedsGrid breeds={data} />}
      </AsyncData>
    </Layout>
  );
};
