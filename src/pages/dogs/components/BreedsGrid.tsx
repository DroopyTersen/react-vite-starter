import React from "react";
import { appRoutes } from "../../../common/routes";
import Card from "../../../ui-toolkit/components/Card/Card";
import { Grid } from "../../../ui-toolkit/components/Grid/Grid";
import { usePagedItems } from "../../../ui-toolkit/hooks/usePaging";
import { DogBreed } from "../dogs.types";
import { BreedFilter } from "./BreedFilter";
import { BreedPaging } from "./BreedPaging";
import { BreedSorter } from "./BreedSorter";

interface Props {
  breeds: DogBreed[];
}

export function BreedsGrid({ breeds }: Props) {
  let { sortedBreeds, ...sortProps } = BreedSorter.useSortedBreeds(breeds);
  let { filteredBreeds, ...filterProps } = BreedFilter.useFilteredBreeds(sortedBreeds);
  let [pagedBreeds, paging] = usePagedItems(filteredBreeds, 16);

  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        <BreedFilter {...filterProps} />
        <BreedSorter {...sortProps} />
      </div>
      <Grid>
        {pagedBreeds.map((breed) => (
          <Card
            url={appRoutes.dogByBreed(breed.id + "")}
            key={breed.id}
            title={breed.name}
            image={breed.image.url}
            subtitle={breed.bred_for}
          ></Card>
        ))}
      </Grid>
      <div className="d-flex justify-content-center mt-4">
        <BreedPaging paging={paging} />
      </div>
    </div>
  );
}
