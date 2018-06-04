# Seshat

Seshat is an easy-to-use yet powerful Github issue aggregator.

# Table of content

- [Improvements](docs/IMPROVEMENTS.md)
- [Design](docs/DESIGN.md)
- [Onboarding](docs/ONBOARDING.md)

# Getting started

## Prerequisites

- nodejs
- npm (or yarn)

## Installing

Getting the code

```bash
git clone git@github.com:fizzerpostcards/marc-antoine-technical-test.git
cd marc-antoine-technical-test/
```

With NPM

```bash
npm install
npm run dev
```

With Yarn

```bash
yarn
yarn run dev
```

## Commands

The various command you will need to run the project.

- Build -> `yarn run build`
- Deploy -> `yarn run deploy`
- Run -> `yarn run develop`
- Lint -> `yarn run lint`

# Deployment

Seshat is built on firebase. You can create your own firebase project and edit `helpers/firebaseConfig.js` if you want to deploy it by yourself.

You will need be required to install firebase tools if you want to deploy the project.

```bash
npm install -g firebase-tools
firebase login
```

With NPM

```bash
npm run deploy
```

With Yarn

```bash
yarn run deploy
```
