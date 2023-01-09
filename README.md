# Project overview

A gallery that allows users to upload their favorite hot sauces or like/dislike ones that others share.

- Te [homepage/gallery](https://piiquante.netlify.app/) and [login](https://piiquante.netlify.app/signin) pages are accessible to everyone
- To create, update or delete your own sauces or like/dislike other people's sauces you must first login or create an account.

I created this project ( including the Back-End ) in the beginning of 2022 with React, javascript and SCSS modules.
in january 2023 i have updated the project to better reflect my improved skills, i have migrated to Typescript and Styled-Components, i have written tests that cover most of the code (see /coverage directory), and i have updated the state management with the implementation of UseContext and useReducer.

## Production links:

### [Front-End](https://piiquante.netlify.app/)

### [Beck-End /sauces (Node, Express, MongoDB)](https://secure-harbor-62492.herokuapp.com/api/sauces)

### [Beck-End documentation](https://github.com/2gi3/Piiquante-FrontEnd/blob/main/BackEnd-requirements.pdf)

## Quick navigation

In this paragraph i try to make it easy for you to find the code that addresses specific solutions or skills.

### Jest, react testing library and MSW

`/src/saucePaga/SaucePage.test.js`
This file covers more than 85% of the SaucePage, here you can see how i test the following features:

- Page load spinner
- HTTP Get, Put and Delete requests with MSW
- User Click events
- Code behaviour depending on SessionStorage state

### State management

- `/src/components/error/Error.tsx`
  This component is imported by "src/pages/Homepage".
  Here you can see how i lift the state from Child to parent without using hooks in the child.
- `src/App.tsx`
  Here is where the context provider wraps around the `<Routes>` component, making the context from available globally. - `src/store/context.tsx`
  Here the context is created.

  Two of the files where you can see the context being used or updated are:

  - `src/components/Header.tsx`
    Lines 29, 115, 127, 141
  - `src/pages/accass/Access.tsx`
    Lines 34, 97, 100

### React hooks

- `src/functions/hooks.tsx`
  Here you can find a custom hook that fetches data
- `src/pages/SaucePage.tsx`
  useEffect, useState, useRef, useReducer, useContext, useParams
- `src/pages/homepage/Homepage.tsx`
  useFetch (custom hook)
- `src/pages/access/Access.tsx`
  useNavigate

## Architecture

### /src

This directory contains the source code.

- `index.css` has a global scope.
- `App.tsx`,here all components are imported from /pages and routed.

  - The Routes "signin" and "signup" share the same element
  - The routes "newsauce" and "updatesauce" share the same element

#### /styles

This folder contains CSS variables, mixins and styled-components that are used in many files

#### /pages

Every file in this directory is a whole website page and is in its own subdirectory, which contains:

- The React component
- the .test.js file
- the StyledComponents file where the CSS in javascript is written.

#### / components

Every file in this directory is a component that can be imported by any page.

#### /functions

This directory contains a file with normal Typescript functions and a file for custom hooks

#### /store

This is where global context is created

#### /types

This directory contains custom types, e.g.: Interfaces, enums.

#### /assets

This directory contains images and videos that are used in the project

## Set up the project locally

### `git clone https://github.com/2gi3/Piiquante-FrontEnd.git`

If you use the GitHub CLI, copy the command above to clone the repository, otherwise download the zip file from [this page](https://github.com/2gi3/Piiquante-FrontEnd)

### `npm install`

In the project directory, run this command to install all any dependencies.

### `npm start`

Starts the development server.

### `npm test`

Launches the test runner in the interactive watch mode, add the flag `-- --coverage` to check the test coverage

### `npm run build`

Compiles and optimises the code for production in the `build` folder.

### `netlify deploy`

After running running the "build" script, this comand will create a draft deploy with a draft URL.

### `netlify deploy --prod`

After running running the "build" script, this comand will update the [production website](https://piiquante.netlify.app/)

## Deployment

Using the Netlify CLI:

- Save any changes you may have made locally
- Run `npm run build`
- Update any environment key on [Netlify](https://www.netlify.com/)
- Run one of the following scripts:

### `netlify deploy`

Creates a draft deploy with a draft URL.

### `netlify deploy --prod`

Creates or updates the [production website](https://piiquante.netlify.app/)

For different ways to build and deploy this project on Netlify, [clisk here](https://docs.netlify.com/)

## Issues and bugs

### `src/pages/saucePage/SaucePage.tsx`

The like/dislike buttons work perfectly only because i have no dependencies to useEffect in this page.
If i try to make this page rerender only when a like/dislike button is clicked, then the nomber of likes/dislikes shown will be the second-latest (instead of the lates).
Although everything works perfectly from a UX point of view, this bug makes this page rerender continuously, making unnecessary HTTPS requests.

### `Typescript error`

When a typescript module is imported, the path must end with .ts or .tsx for the project to work, otherwise that module will not be found.

This however generates no build-time errors and the project is deployed without problems.

Teoretically, since the path is a string, and when typescript is compiled to javascript at build time, all .ts files are compiled into .js this should be a problem,
hence the Typescript error that i can't get rid of.
And i am also not sure why this is not generating any build time errors.

- Example:
  import { UserContext } from '../../store/Context `.tsx`
- Error:
  An import path cannot end with a '.tsx' extension. Consider importing './saucePageStyledComponents.js' instead.ts(2691)
- Considerations:
  This project was originally written with JavaScript, and later it was migrated to TypeScript.

## Learn More

Originally this was a project from [OpenClassrooms](https://openclassrooms.com/en/), i was given the [original front-end](https://p6ocgiuseppeippolito.netlify.app/login), and i created a Node/Express [back-end](https://github.com/2gi3/Piiquante-BackEnd) for it, following [these requirements](https://github.com/2gi3/Piiquante-FrontEnd/blob/main/BackEnd-requirements.pdf).
When i finished my learning path an OpenClassrooms i decided to do this new front-end to go with the back-end i had created during my Web-developer course.
