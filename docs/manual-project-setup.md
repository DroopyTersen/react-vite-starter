# Manual Setup Instructions

If you don't want to clone the template repo, you can create a project from scratch and reference these instructions.

- [x] [Create Vite Project](#create-vite-project)
- [x] [Setup Aliases](#setup-aliases)
- [x] [Setup Global Types](#setup-global-types)
- [x] [Setup Bootstrap CSS](#setup-bootstrap-css)
- [x] [Setup React Router](#setup-react-router)

## Create Vite Project

- Running the following will ask a bunch of questions
- It will create a new folder for you using the specified project name
- When it asks to you **Select a framework**, choose **react**, then choose **react-ts** (if you want to follow along with this instructions)

```
npm init vite
```

## Setup Aliases

In `tsconfig.json` set the paths

```json
{
  "compilerOptions": {
    "paths": {
      "~global/*": ["./src/global/*"],
      "~common/*": ["./src/common/*"],
      "~components/*": ["./src/components/*"],
      "~hooks/*": ["./src/hooks/*"],
      "~features/*": ["./src/features/*"]
    },
  ...
  }
}
```

In `vite.config.ts` setup the `resolve.alias`

```ts
import { defineConfig } from "vite";
import * as path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";

export const viteAliases = {
  "~common": path.resolve(__dirname, "./src/common"),
  "~hooks": path.resolve(__dirname, "./src/hooks"),
  "~components": path.resolve(__dirname, "./src/components"),
  "~features": path.resolve(__dirname, "./src/features"),
  "~global": path.resolve(__dirname, "./src/global"),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: viteAliases },
  plugins: [reactRefresh(), visualizer()],
});
```

## Setup global types

Create a file at `src/types/global.d.ts` and add any global types/interfaces inside the `declare global { }` block.

```ts
export {};

declare global {
  type Environment = "LOCAL" | "DEV" | "UAT" | "PROD";

  type Role = "admin" | "user";

  interface User {
    id: string;
    name: string;
    role?: Role;
    isImpersonation: boolean;
  }

  type ValidationStatus = "none" | "valid" | "invalid";
}
```

## Setup Bootstrap CSS

If you aren't going to create a custom theme, the easiest way is to just link to the CDN inside of `index.html`.

Otherwise, to create a theme you need to setup SASS variables and compile bootstrap as part of your build process.

First install `sass` and `bootstrap`.

```
npm install --save-dev sass
npm install bootstrap
```

Next create the following two files:

```
/src
  /global
    /styles
      global.scss
      theme.scss
```

Inside of `global.scss` put in the following

```scss
@import "./theme.scss";

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import "../../../node_modules/bootstrap/scss/bootstrap.scss";
```

Inside of `/src/styles/theme.scss` put in the following. Feel free to delete the commented code, it is there to help you build a custom theme.

```scss
$theme-colors: (
  "primary": #8a2287,
  // "secondary": $secondary,
  // "success": $success,
  // "info": $info,
  // "warning": $warning,
  // "danger": $danger,
  // "light": $light,
  // "medium": $medium,
  // "dark": $dark,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
);
// $grid-breakpoints: (
//   xs: 0,
//   sm: 576px,
//   md: 768px,
//   lg: 992px,
//   xl: 1200px,
//   xxl: 1600px,
// );
// $spacer: 2rem;
// $mobile-spacer: 1rem;
```

Import `global.scss` into `global/app.tsx`

```ts
import "../styles/global.scss";
```

## Setup React Router

At the top of of `App.tsx` add the following `import`

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
```

Next update the main `App` component to be the following

```tsx
function App() {
  // Wrap AppRoutes with any Context Providers you might eventually have
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  // By putting AppRoutes in a separate child component
  // you can now consume any wrapped Context Providers
  return (
    <Routes>
      <Route path="*" element={<HomeView />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route path="/" element={<BlogPostsView />} />
        <Route path=":postId" element={<BlogPostView />} />
      </Route>
    </Routes>
  );
}

export default App;
```
