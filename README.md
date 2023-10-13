<h1 align="center">
  React Contacts App by Sara Cruz
</h1>

<p align="center">
  Website to display a contacts list where you can: add a new one and delete the existing ones, order by name or email and display more contact info.
  <br />
  <br />
</p>

### External Tech Docs:
The project is using [reqres.in](reqres.in), a free API, that is why when you add a new contact it won't be stored when you refresh the page.

### External Tech Docs:
[Notion](https://www.notion.so/Contacts-App-c2bfceff077645558986bd587acdbc8b?pvs=4)

## Run your app

   1. `cd my-app`: Move to your project root directory
   2. `npm install`: Install all the project dependencies
   3. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [React Context](https://react.dev/reference/react/useContext) to manage the global state
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Styled Components](https://styled-components.com) to manage CSS
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🔀 Related information

This application was generated using the [<⚡⚛️> Vite React Best Practices Template](https://github.com/CodelyTV/vite-react_best_practices-template).
