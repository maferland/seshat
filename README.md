# Seshat

Seshat is an easy-to-use yet powerful Github issues aggregator.

# Table of content

- [Improvements](docs/IMPROVEMENTS.md)
- [Design decisions](docs/DESIGN.md)
- [Onboarding](docs/ONBOARDING.md)

# Getting started

## Prerequisites

- nodejs
- yarn (or npm)

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

To do so, you will be required to install firebase tools.

```bash
npm install -g firebase-tools
firebase login
```

Then, you will be able to deploy it 🚀

With NPM

```bash
npm run deploy
```

With Yarn

```bash
yarn run deploy
```
