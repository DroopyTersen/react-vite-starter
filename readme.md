# React TypeScript SPA w/ Vite

![Starter Logo](docs/images/react-vite-typescript-starter.png)

- [React TypeScript SPA w/ Vite](#react-typescript-spa-w-vite)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
    - [`/src` folders](#src-folders)
    - [Root level files](#root-level-files)
  - [Additional Docs](#additional-docs)
    - [Manual Project Setup](#manual-project-setup)

## Overview

This starter template leverages the following technologies:

- React
- Vite
- TypeScript
- Bootstrap v5
- React Router v6
- Sass

It also tries to establish a few conventions around folder structure.

## Getting Started

You can make a copy of the starter repo (without the GIT history) by running the following command. This

```
npx degit droopytersen/react-vite-starter my-new-project
```

Then you can `cd` into your project directory and install dependencies and run the app

```
npm install
npm start
```

Lastly, you'll probably want to update the project name inside of `package.json` as well as the title in `index.html`.

## Project Structure

### `/src` folders

Most of your application code will be inside of `src`

```
/src
  /common
  /features
  /global
  /ui-toolkit
```

**`/src/global`**

This folder is designated for **things that wrap your entire application**.

![Global Folder](docs/images/global-folder.png)

Some commonly found items in this folder are:

- App.tsx
- Global styles
- Global layout components (global nav, global footer, etc...)
- Context Providers (AuthProvider, ThemeProvider, etc...)

**`/src/features`**

This folder will have a sub-folder for each distinct "module"(feature) of your application.

How you decide to group your application into features is up to you, but typically it kind of lines up to your application's url paths and/or API paths.

Once in a feature folder, follow the conventions described below to keep things organized.

- `/views`
  - `*View` components are typically what a route will map to
  - `*View` components often handle data fetching
  - `*View` usually stay relatively small and defer most of the rendering to something from the feature's `components` folder.
- `/components`
  - Any components related to the feature
  - Generally prefer to make them "dumb" - aka pass all the data they need in as props.
    - Not a hard and fast rule. Every app will have a couple exceptions.
- `<feature>.types.ts` - any Typescript interfaces/types specific to the feature
- `<feature>.data.ts` - Handles data access and transformation for the feature
  - If you have a lot of data stuff going on for a specific feature, maybe consider breaking it into multiple files inside a `data` folder.

_Feature folder example_

![Feature folder](docs/images/feature-folder.png)

**`/src/common`**

This folder is designated for **non-react things that are leveraged across features**. Common examples include:

- A generic request function make `fetch` calls to your API
- Application specific formatters and validation (`displayDate`, `validatePhone`, etc...)
- Typescript interface/types that are common to all features of your app
- `routes.ts` to store application paths in a single place so it is easier to update urls/paths in the future.

**`/src/ui-toolkit/components`**

This folder is for **generic React components** that aren't specific to a feature (and commonly not even specific to your app).

> The idea is that **components in this folder could easily be dropped into other projects**.

_Example generic components_

![UI Toolkit Components](docs/images/ui-toolkit-components.png)

**`/src/ui-toolkit/hooks`**

This folder is for **generic React hooks** that aren't specific to a feature (and commonly not even specific to your app).

> The idea is that **hooks in this folder could easily be dropped into other projects**.

_Example generic hooks_

![UI Toolkit Hooks](docs/images/ui-toolkit-hooks.png)

### Root level files

- `.prettierrc` - Allows everyone to share prettier settings so there aren't formatting conflicts.
- `index.html` - Is the main entry point into your app that Vite uses.
- `package.json` - Describes your project and it's dependencies.
- `package-lock.json` - Auto generated my `npm`. It is used to make sure everyone is using the same version of dependencies
- `stats.html` - Open in a browser to examine your bundle size. Auto generated by `rollup-plugin-visualizer` when you `npm run build`.
- `tsconfig.json` - Typescript configuration
- `vite.config.ts` - Vite configuration

## Additional Docs

### Manual Project Setup

If you want to start from scratch instead of copying/cloning this template repo.

[View Manual Project Setup Docs](docs/manual-project-setup.md)
