# Project overview

I created this project in the beginning of 2022 with React, javascript and SCSS modules.
in january 2023 i have updated the project to better reflect my current skills, i have migrated to Typescript and Styled-Components, i have written tests that cover most of the code (see /coverage directory), and i have updated the state management with the implementation of UseContext and useReducer.

Originally this was a project from [OpenClassrooms](https://openclassrooms.com/en/), i was given the [original front-end](https://p6ocgiuseppeippolito.netlify.app/login), and i created a Node/Express [back-end](https://github.com/2gi3/Piiquante-BackEnd) for it, following [these requirements](https://github.com/2gi3/Piiquante-FrontEnd/blob/main/BackEnd-requirements.pdf).
When i finished my learning path an OpenClassrooms i decided to do this new front-end to go with the back-end i had created during my Web-developer course.

## Quick navigation

In this paragraph i try to make it easy for you to find the code that addresses specific solutions or skills.

### Jest, react testing library and MSW

`/src/saucePaga/SaucePage.test.js`
This file covers more than 85% of the SaucePage, here you can see how i test the following features:

- Page load spinner
- HTTP Get, Put and Delete requests with MSW
- User Click events
- Code behaviour depending on SessionStorage

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

## Available Scripts

In the project directory, you can run:

### `npm install`

If you have cloned this repository, this command will install all the necessary Node modules.

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `netlify deploy`

After running running the "build" script, this comand will create a draft deploy with a draft URL.

### `netlify deploy --prod`

After running running the "build" script, this comand will update the [production website](https://piiquante.netlify.app/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
