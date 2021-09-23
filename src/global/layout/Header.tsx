import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../common/routes";

export function Header() {
  return (
    <header className="m-0 p-3 bg-primary text-white">
      <nav className="flex gap-4 align-items-center">
        <a href={appRoutes.home()} className="me-3 fs-4 text-white p-2 text-decoration-none">
          App Demo
        </a>

        <a href={appRoutes.dogs()} className="mx-3 p-2 text-white  text-decoration-none">
          Dogs
        </a>
        <a href={appRoutes.cats()} className="mx-3 p-2 text-white text-decoration-none">
          Cats
        </a>
        <a href={appRoutes.about()} className="mx-3 p-2 text-white text-decoration-none">
          About
        </a>
      </nav>
    </header>
  );
}
