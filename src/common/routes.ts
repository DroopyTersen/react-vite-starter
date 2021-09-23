export const appRoutes = {
  home: () => "/",
  about: () => "/about",
  dogs: () => "/dogs",
  dogByBreed: (breedId: string) => `/dogs/${breedId}`,
  cats: () => `/cats`,
  catBreed: (breedId: string) => `/cats/${breedId}`,
};
