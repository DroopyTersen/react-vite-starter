import React, { useMemo, useState } from "react";
import { InputField } from "../../../ui-toolkit/components/forms";
import { useDebouncedValue } from "../../../ui-toolkit/hooks/useDebounce";
import { DogBreed } from "../dogs.types";

export function BreedFilter({ className = "", filter, setFilter }) {
  return (
    <InputField
      className={className}
      placeholder="Filter..."
      type="search"
      value={filter}
      onChange={(e) => setFilter(e.currentTarget.value)}
    />
  );
}

function useFilteredBreeds(allBreeds: DogBreed[]) {
  let [filter, setFilter] = useState("");
  let debouncedFilter = useDebouncedValue(filter, 250);

  let filteredBreeds = useMemo(() => {
    if (!filter) return allBreeds;

    return allBreeds.filter((breed) =>
      breed.name.toLowerCase().includes(debouncedFilter.toLowerCase())
    );
  }, [allBreeds, debouncedFilter]);

  return {
    filter,
    setFilter,
    filteredBreeds,
  };
}

BreedFilter.useFilteredBreeds = useFilteredBreeds;
