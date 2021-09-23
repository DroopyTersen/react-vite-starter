import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
hydrate();

async function hydrate() {
  const pageContext = await getPage(); // (`pageContext` is preloaded in production)
  const { Page, pageExports } = pageContext;
  ReactDOM.hydrate(<Page {...pageExports} />, document.getElementById("page-view"));
}
