# Improvements

## Things that could be improved

- Use a state management tool (vuex)
- Optimise graphql requests made to github (See design decision about the _search_)
- Page issues and repositories requests
- Setup github login to access private repositories
  - Right now, the github api key a private account-bound key
  - It's not something we want to deploy in production
- Improve performances
  - Cache requests (with _service workers_)
- Test on _IOS_
- Create parent components for those who are similar i.e.: _SearchIssue_ and _SearchRepository_
- Seshat makes a **lot** of api call
  - We should discuss the usefulness of the search bar actual implementation
  - A simple solution would be to add a delay before triggering search action
- Create a user profile section
- Internationalize Seshat

## Done

- ~~Extract rbhg color into `color.scss` or `variables.scss`~~
- ~~Fix assets aliases~~]
