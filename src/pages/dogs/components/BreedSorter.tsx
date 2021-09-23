import React, { useMemo, useState } from "react";
import { SelectField } from "~ui-toolkit/components/forms";
import { useQueryState } from "~ui-toolkit/hooks/useQueryState";
import { getValue } from "~ui-toolkit/utils/utils";
import { DogBreed } from "../dogs.types";

export const BreedSorter = ({ sortKey, setSortKey }) => {
  return (
    <SelectField value={sortKey} name="sort" onChange={(e) => setSortKey(e.currentTarget.value)}>
      {sortOptions.map((o) => (
        <option key={o.key} value={o.key}>
          {o.label}
        </option>
      ))}
    </SelectField>
  );
};
interface SortOption {
  label: string;
  key: string;
  comparer: string;
  direction: 1 | -1;
}
const sortOptions: SortOption[] = [
  { label: "Name", key: "name", comparer: "name", direction: 1 },
  { label: "Tallest", key: "tallest", comparer: "height.average", direction: -1 },
  { label: "Shortest", key: "shortest", comparer: "height.average", direction: 1 },
  { label: "Heaviest", key: "heaviest", comparer: "weight.average", direction: -1 },
  { label: "Lightest", key: "lightest", comparer: "weight.average", direction: 1 },
];

function useSortedBreeds(breeds: DogBreed[]) {
  let [sortKey, setSortKey] = useQueryState("sort", "name");

  let sortedBreeds = useMemo(() => {
    let sortOption = sortOptions.find((option) => option.key === sortKey);
    return [...breeds].sort((a, b) => {
      let aVal = getValue(a, sortOption.comparer);
      let bVal = getValue(b, sortOption.comparer);
      return (aVal < bVal ? -1 : 1) * sortOption.direction;
    });
  }, [breeds, sortKey]);
  return {
    sortedBreeds,
    sortKey,
    setSortKey,
  };
}

BreedSorter.useSortedBreeds = useSortedBreeds;
