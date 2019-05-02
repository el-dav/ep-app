# EXD Trader Exercise

This project fulfills all the requirements set out in the exercise documents with some interesting additions e.g. Typescript, Redux Observable, Marble Tests, Storybook, Emotion for styling eand theming and many other small details

### Getting Started (scripts)

- Install node modules:

  `npm install` or `yarn`

- Run the application:

  `npm start` or `yarn start`

- To build the application for serving and deploying:

  `npm run build` or `yarn build`

- To run the tests for the application:

  `npm run test` or `yarn test`

- You can also get the unit test coverage which will generate html assests in a /coverage folder:

  `npm run test:coverage` or `yarn test:coverage`

- To view a storybook catelogue of all the app components (including interactive knobs to dynamically change props):

  `npm run storybook` or `yarn storybook`

- You can also generate a static site version of the storybook for sharing with designers/stakeholders:

  `npm run build:storybook` or `yarn build:storybook`

### Architecture & Technology Stack

- The application is built entirely in [Typescript](https://www.typescriptlang.org/) for the benefits of type-checking, documentation and autocompletion. For the most part this went smoothly but there were a few type mis-matches when used in conjunction with the antd library so `any` type has been used on a few occasions.

- The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Side-effects were handles using [Redux Observable](https://redux-observable.js.org/) epics.

- [Reselect](https://github.com/reduxjs/reselect) was used to efficiently retrieve and manipulate data from the store. This is important in redux applications for avoiding redundant processing and re-renders.

- Testing was implemented using [Jest](https://jestjs.io/en/) through a combination of standard unit testing, snapshot testing and marble testing (for complex epic logic). Although test coverage is a flawed metric there is 100% unit coverage on the redux portion of the application (/store). Most of the components also have 100% unit test coverage through snapshotting various scenarios.

- [Storybook](https://storybook.js.org/) was used to develop each major component in isolation, using the action & knobs addons to dynamically change the input props. The end result are robust stand-alone components and a catalogue for the application which is a valuable resource for sharing with stakeholders and the wider team.

- [Tslint](https://palantir.github.io/tslint/) was used for linting.

- [Prettier](https://prettier.io/docs/en/cli.html) was used for code formatting.

- [Emotion](https://emotion.sh/docs/introduction) was used for themeing and styling. For the most part this worked well although it did not always play nicely with the Antd library so a few style overrides were a little bit hacky.

- [react-split-pane](https://github.com/tomkp/react-split-pane) was used to create the draggable component. On a previous project I have created my own component to do this but didn't have time for this project.

- As requested [Antd](https://ant.design/) widgets were used for the form controls and [ag-grid](https://www.ag-grid.com/) was used for the blotter

### Interesting Details

- The Symbol autocomplete will match a search for either the Symbol or the full company name.

- Use of [react-spring](https://www.react-spring.io/) to animate the error popup

- Use of [marble testing](https://rxjs.dev/guide/testing/marble-testing) to ensure that the `CREATE_ORDER` action fires after 2 seconds and triggers an error `SET_NEW_ORDER_STATUS` action every 10th submit

- Use of baseUrl to allow absolute imports in typescript (new in [create-react-app v3.0.0](https://github.com/facebook/create-react-app/releases/tag/v3.0.0)). To allow `import { Component } from assets` instead of `import { Component } from '../../../assets`

  My general philosophy with absolute paths is to use `./` to import direct children and use absolute imports over `../`. This means that each folder/component is self-encapsulated and can be moved with minimal updates to references.

### Issues

- Antd suggests that for production you would need to [eject from create-react-app or switch to react-app-rewired](https://ant.design/docs/react/use-with-create-react-app) to avoid loading all the library styles. I didn't get around to implementing this and feel that a component libaray should require you to change your build process.

- Related to use of Antd there are a couple of workaround for overwriting styles and getting typescript to align with some of the Antd compoenents.

### Next steps

- With more time I would have implemented end-to-end tests using a framework such as Cypress
