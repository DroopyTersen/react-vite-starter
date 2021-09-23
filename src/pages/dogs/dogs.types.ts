export interface Height {
  imperial: string;
  metric: string;
  average?: number;
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Weight {
  imperial: string;
  metric: string;
  average?: number;
}

export interface DogBreed {
  bred_for: string;
  breed_group: string;
  height: Height;
  id: number;
  image: Image;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: Weight;
}
