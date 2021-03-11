# invaza 🏔

Bootstraps a template project with some popular packages and some pre-configured script commands. 

## How to use

Make sure you have the following tools:

- [Git](https://git-scm.com/)
- [Github Account](https://github.com/)

In the terminal execute the following cmd:

```bash
npx degit https://github.com/FranciscoMendes10866/invaza [PROJECT_NAME]
```

## Installation

NPM
```bash
npm install
```

Yarn
```bash
yarn install
```

## How to run

NPM
```bash
npm run dev
```

Yarn
```bash
yarn dev
```

## Brief Explanation

If you have an API already running on the following port and address: `http://localhost:4000` and if you happen to have the following route to login the user: `http://localhost:4000/api/v1/user/sign_in`.

When trying to use the API Gateway to log the user into the users' microservice, you would have to use the following route: `http://localhost:9999/auth/api/v1/user/sign_in`

As simple as that.
## License
[MIT](https://choosealicense.com/licenses/mit/)
