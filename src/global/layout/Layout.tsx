import React from "react";
import { Header } from "./Header";
import "../styles/global.scss";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-4">{children}</main>
    </>
  );
};
