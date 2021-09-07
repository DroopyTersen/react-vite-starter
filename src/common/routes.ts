export const appRoutes = {
  home: () => "/",
  dogs: () => "/dogs",
  dogByBreed: (breedId: string) => `/dogs/${breedId}`,
  cats: () => `/cats`,
  catBreed: (breedId: string) => `/cats/${breedId}`,
};
