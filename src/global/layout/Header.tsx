import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../common/routes";

export function Header() {
  return (
    <header className="m-0 p-3 bg-primary text-white">
      <nav className="flex gap-4 align-items-center">
        <Link to={appRoutes.home()} className="me-3 fs-4 text-white p-2 text-decoration-none">
          App Demo
        </Link>
        <Link to={appRoutes.dogs()} className="mx-3 p-2 text-white  text-decoration-none">
          Dogs
        </Link>
        <Link to={appRoutes.cats()} className="mx-3 p-2 text-white text-decoration-none">
          Cats
        </Link>
      </nav>
    </header>
  );
}
