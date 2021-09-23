import React from "react";
import { useParams } from "react-router-dom";
import { AsyncData } from "~ui-toolkit/components/AsyncData/AsyncData";
import { BreedDetails } from "../components/BreedDetails";
import { fetchDogBreedById } from "../dogs.data";

export const BreedDetailsView = () => {
  // the Breed Id comes from the url /breeds/:breedId
  let { breedId } = useParams();
  return (
    <AsyncData asyncFn={fetchDogBreedById} params={[breedId]}>
      {(data) => <BreedDetails breed={data} />}
    </AsyncData>
  );
};
