# user-management-app

User management app containing features such as viewing, adding, removing and editing users.

The application utilises an atomic design for the component structure (https://atomicdesign.bradfrost.com/).

## Project Setup

Install the node packages required and create a .env.local file (A .env.example file has been provided as guidance).

```sh
npm i
```

### Compile and Hot-Reload for Development

Once the correct .env.local file is in place, you can run the application:

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

A few example unit tests have been provided for the BaseButton.vue component.

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
