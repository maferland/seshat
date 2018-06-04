# Design

Several design decisions were taken during Seshat's creation. The following will give insight into the reason behind the most important decisions.

# Table of content

- [Project structure](#project-structure)
- [Firebase](#firebase)
- [Vue](#vue)
- [Github API](#github-api)
- [EventBus](#eventbus)
- [Design](#design)

## Project structure

The project structure is quite simple but I found it to be quite effective for small to medium scale project. It takes the power of `.vue` file structure to store the HTML, the CSS and the business logic (javascript) of a component in the same file.

`views/` is used to store complete pages. Views should not define much logic. It's mostly used to organize components to build the page we are looking for. Sometimes, if it suits the way the project is built, it's a good idea to write your styles or propagate state through it. On the other hand, `components/` are the view's building blocs.

The system I'm using is a personal evolution of Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

I think it's an efficient way to organize the project since you are not required build everything from scratch every time. Using `.vue` files reduce the need to browse several files at once before understanding what's going on.

A generic or reusable piece of code should be stored elsewhere. This is the reason why we have `helpers/`, `services/`, and `assets/styles/`. This is also an efficient way to abstract external services complexity away from the main working flow.

## Firebase

There are four major reasons why I have chosen Firebase.

- Time constraint:
  I was a little short on time. Firebase is a very efficient platform to develop with. It allows you to have something up and running in no time. Since I only had 5 days (most of which I could not use for Seshat), I skip most of the DevOps work was a fine idea.
- Real-time database:
  Firebase offers a real-time database. This is perfect for single page applications since you can listen to data changes and react to it accordingly without long-polling the database. It's abstract a good amount of complexity to keep in-memory lists up to date.
- Authentication:
  Firebase allows fast and simple authentication. This way I could focus on what really brought value to Seshat and make sure I still had an interesting application.
- It's free:
  You can have you static website up and running super fast without spending a dime. Quite cool for people on a budget or when you can to do quick prototyping.

The biggest flaw in my approach with Firebase is that I don't try too hard to prevent network call. I didn't enable firebase offline capabilities and I am not even trying to cache data and utilize service workers to optimize Seshat. Those extra steps could help us make a progressive web app feeling and allow the app to be used offline.

## Vue

This time, no big deal. I have chosen Vue because it's the framework I was the most familiar with. But there are a couple Vue design decisions which I can get behind.

- For people with no JS framework experiences, templates feel more like natural (like HTML) than JSX does.
- Vue forces the usage of a one-way data flow between components. It can make quite a  few interactions _interesting_. But in larger, more complicated APP it forces us to keep our dataflow simpler which is the good decision. I have overcome some of the problems related to one-way data flow by using the EventBus 🙈.
- Component scoped CSS makes it easier to write and organize your CSS. It's clean and efficient. I also believe it makes development faster and helps new hiree onboard faster since most of the time they won't have to find the file where the CSS is hiding.

## Github API

I don't really know if there was a way not to use the Github API V4. ~~Even though my first naive approach was to start by making a HEAD request to define if a repository exists 🙈~~. So I went with using the API. I had to learn graphql at a fast pace. I had heard of it, read of it but it was my graphql baptism of fire.

I won't talk too much about the API. But I'll expand my thoughts about the usage I have made of it (and the flaws which could prevent Seshat to scale properly).

- I am making a rest call to Github on **EVERY. SINGLE. KEY. STROKE.** that is made in one of the search bar. This is bad. This is not efficient and could put quite a lot of strain on the API (or on mobile devices performance).
- I have not used the server side paging at all. This is bad. As I said before, I am making a call on every character typed. This mean that is I have 30 repositories saved, and I make a 10 character query I will make 10 call, each of those having 30 queries bundled in them. Each query can return up to 10 issues (as of now). The resulting payload will be up to `10 x 30 x 10 x [the weight of an issue]`. This can get big quite fast. There is also a relevance problem, since it takes 10 results per repositories without caring about relevance. It might be in our users best interest to have 100 issues from the same repository if they are a better match.
- I am not using the search query properly. Right now, Seshat is asking for `REPOSITORY` or `ISSUE` with a query string. However, the assignment asked to search for the issue title only. The queries are probably searching through the whole issue (I cannot be sure of this detail since the documentation was unexpectedly opaque). It leads to awkward results, without the typed keyword or without results at all. I would need a better understanding of the inner workings of the Github API to improve the situation.

I would like to state that the number of calls I am doing is a trade-off for a better user experience. Since I'm doing this much call it allows for a fluid search experience where the results are flowing in as soon as the user starts typing. Fixing the actual implementation (or adding a small timeout before doing a query) might improve the performance without losing too much quality of life.

## EventBus

Using the EventBus solution is easier than using a state management library such as vuex. But it's also much less powerful. I've decided to skip vuex in this project because of the scope. I thought it was quite simple and didn't require all the firepower brought by vuex.

Looking forward I think it was the right decision. However, I could have built the app without using the EventBus as well. I believe it would have resulted in bigger and more complex components.

**BUT**, the price of having my components split the way they currently are is additional complexity in my views. It would have forced me to use the view as a state manager for its components

The way I have divided my components is not perfect (and there is a little too much redundancy between some of them). It could be improved. However, I believe the actual complexity is totally admissible.

## Design

I would like to touch briefly about the UI design I have created for the App. I have built Seshat mostly mobile first. I have created an interesting app for both mobile and desktop. I went for a simple and not too flashy color palette to create a `productivity tool` feeling.

I focused on user experience, trying to reduce the possible confusion as much as possible (I did so by minimizing the number of links, buttons, and input). I also kept a coherent theme throughout the app.
