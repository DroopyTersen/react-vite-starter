import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui-toolkit/components/Button/Button";
import { DogBreed } from "../dogs.types";

interface Props {
  breed?: DogBreed;
}

export function BreedDetails({ breed }: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex gap-3 align-items-center">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i>
        </Button>
        <h1>{breed.name}</h1>
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        <div style={{ flex: "0 1 300px" }}>
          <img className="rounded" style={{ maxWidth: "100%" }} src={breed.image.url} />
        </div>
        <div style={{ flex: "1" }}>
          <div className="badge bg-primary me-2">{breed.breed_group}</div>
          <ul className="mt-2">
            <li>{breed.bred_for}</li>
            <li>{breed.temperament}</li>
            <li>Originally from {breed.origin || "unknown"}</li>
          </ul>
          <div>
            <div>Height: {breed.height.imperial} inches</div>
            <div>Weight: {breed.weight.imperial} lbs</div>
            <div>Lifespan: {breed.life_span}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
