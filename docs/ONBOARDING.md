# Onboarding

Do you want to get involved in this project?
Once you are able to run the project here is are few tips on how to get going.

# Table of content

- [Repository architecture](#repository-architecture)
- [Running project tasks](#running-project-tasks)
- [Workflow](#workflow)
- [Automated](#automated)

## Repository architecture
“how is the code organized, and why?”

<pre>
├── build => Where we define build info ⚙️
├── config => Where we define Seshat's config 🛠
├── dist
│   └── static
│       ├── css
│       ├── img
│       └── js
├── docs => Where we store the doc you are currently reading 📚
├── src
│   ├── assets => Were we store images and stylesheets 🖼
│   │   └── styles
│   ├── components => Where we define our building blocs
│   │   ├── issue
│   │   ├── repository
│   │   └── ui => Generic building blocs
│   ├── events
│   ├── helpers => Where we store config and utils
│   ├── router => Where we define your routes 🚇
│   ├── services => Where we can access external services
│   └── views => Where we define the views
└── static
</pre>

## Running project tasks
“how do I _____ on my local machine?”

The various command you will need to run the project.

- Build -> `yarn run build`
- Deploy -> `yarn run deploy`
- Run -> `yarn run develop`
- Lint -> `yarn run lint`

## Workflow
“I wrote code, how does it get from here to there?”

A good starting point to understand the project is to take a look at the [router](src/router.index.js). You will be able to understand the path taken by Seshat. Then, you can drill down the views until you reach the components where most of the stuff happened.

The only bit of black magic 🎩 in the app is the usage of the EventBus. We use it to propagate information to other components without using a library such as vuex.

If you ever see one of the following:

```javascript
EventBus.$on('onSnackbarDisplayed', callback);
EventBus.off('myCustomEventName');
EventBus.$emit('onRepositoryAdded', repository);
```

It means we are using the EventBus to propagate state and/or data. You should search for where the key is listening/emitting to trace what is going on.

## Automated testing
“how do I write / run them, and why should care?”

404 NOT FOUND -- 💥

Be the first to add a test suite and make Seshat even more awesome 😅
