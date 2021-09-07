import { config } from "~common/config";
import { jsonRequest } from "~common/request";
import { DogBreed } from "./dogs.types";

const API_URLS = {
  dogBreeds: `https://api.thedogapi.com/v1/breeds`,
  dogBreedById: (breedId) => `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}`,
};

export const fetchDogBreeds = async (): Promise<DogBreed[]> => {
  let breeds: DogBreed[] = await jsonRequest(API_URLS.dogBreeds);
  breeds.forEach((breed) => calcAvgSize(breed));
  return breeds;
};

export const fetchDogBreedById = async (breedId: number | string) => {
  let url = API_URLS.dogBreedById(breedId);
  let [{ breeds, ...image }] = await jsonRequest(url);
  let breed: DogBreed = {
    image,
    ...breeds?.[0],
  };

  return breed;
};

const calcAvgSize = (breed: DogBreed) => {
  calcAvg(breed, "height");
  calcAvg(breed, "weight");
};

const calcAvg = (breed: DogBreed, unit: "height" | "weight") => {
  let [minStr, maxStr] = breed?.[unit]?.imperial?.split(" - ");
  let min = parseInt(minStr) || 0;
  let max = parseInt(maxStr) || 0;
  let avg: number = min || max;

  if (min && max) {
    avg = Math.ceil((min + max) / 2);
  }
  breed[unit].average = avg;
};
