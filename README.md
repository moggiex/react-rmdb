<image src="https://user-images.githubusercontent.com/16717155/155543377-70daf41c-8c0e-448b-8f72-f5238219e1aa.png" width="350" align="right" />

# React JS Course for Beginners

7 hour course from freeCodeCamp.org here https://www.youtube.com/watch?v=nTeuhbP7wdE

> Create a React site using movie data being pulled via the https://www.themoviedb.org/ API

## Start, End Date & Final Project
- **Start:** 21st Feb 2022
- **End:** 24th Feb 2022
- **URL:** [https://react-rmdb.pages.dev/](https://react-rmdb.pages.dev/) - Cloudflare Pages
- **URL:** [https://the-awesome-moggiex-site.netlify.app/](https://the-awesome-moggiex-site.netlify.app/) Netlify [![Netlify Status](https://api.netlify.com/api/v1/badges/dc0c1a3a-15dc-40f0-b5bd-b840c48f59e8/deploy-status)](https://app.netlify.com/sites/the-awesome-moggiex-site/deploys)

## What I liked & disliked

- Still early days and a little bemused right now that putting CSS into individual files (styled-components), per component, even with vars/logic in the react app itself is considered a "good idea" (I am used to just relying upon BootStrap for everything from Yii2)
- About 4 hours in I decided to evolve this tutorial further by:
  - Adding caching to the API calls.
  - Adding new route for persons (actors)
  - Expanding the breadcrumbs and routes in the url more logical ones (ie 'movie/movieId-[seo url of movie title])
- Caching failed badly as its just client side and not server side. I would/could need to use NodeJs as middleware to the themoviedb.org API to add real caching (caching was demostrated using session storage [could have been local] but neither cache the API calls on a app level)
- Adding a route for person and their components was easy. Stopped at the basics as there is the need to add multiple API calls to get all the data from the persons/ api
- During the course Netlify was demostrated for deplyment. (here https://the-awesome-moggiex-site.netlify.app/) I liked how simple this was to deploy, reminded me of Heroku. However looking at Netlify more closely, I would actually choose CloudFlare pages instead. One for the unlimted bandwidth (vs 100Gb) but also I have had very good expereinces with CloudFlare as a CDN for multiple sites, hence the first choice.
- Update: Deployed to CF here https://react-rmdb.pages.dev/ and CF is defintely faster build to deploy each time
- Realised that we did'nt have a way of updating the page title and description in ReactJS (and of course this is a movies site, so other og:meta data for scores/ratings, reviews etc... are all valid here!), so discovered react-helmet which solved this. This can be seen working in src/Movie.js with some extra logic to trim a long overview about a movie.

## How could I expand upon this project?

- Adding a NodeJs API to cache API calls (see notes above about the failed attempt, which I then learned was client side only)
- Using a CDN to cache the images within the api to reduce the reliance upon the API data (could be simply solved by using Netlify or cloudflare as I later realised)
- Add eBay & Amazon price integrations to compare prices on movies
  - For newly released movies, this may not be possible as no DVD or products released yet
  - Should also see if Netflix, Amazon Prime, Sky+ etc.. have API's to see if available there also
  - Are products available for the film?
  - Could look for autographs on eBay from actors
- Could also look up wiki pages on actor, producers, characters etc...
- Show other movies for each actor (eveolve the use of the provided person API to interlink everything)
- Add a rating (stars?) for each movie, actor
- Add the ability to add comments from users to both (would need user registration, again the reliance upon NodeJS as a BE is highlighted here for anything more than just a showcase site)

## ⭐️ Course Contents ⭐️

- ⌨️ (0:00:10) Introduction
- ⌨️ (0:00:57) The App
- ⌨️ (0:03:27) The Movie DB - API Key
- ⌨️ (0:05:09) What is React?
- ⌨️ (0:10:49) Starter Files
- ⌨️ (0:14:16) Quick about tooling
- ⌨️ (0:15:50) Bootstrap with CRA
- ⌨️ (0:19:11) Install dependencies
- ⌨️ (0:24:17) Copy fils from starter files
- ⌨️ (0:28:34) Setup API Key and walkthrough of API files
- ⌨️ (0:33:24) React without JSX
- ⌨️ (0:40:10) Short about JSX
- ⌨️ (0:42:52) Crash course in Props and State
- ⌨️ (0:55:12) Short about Styled Components
- ⌨️ (0:58:23) Global Styles
- ⌨️ (1:08:01) Header Component
- ⌨️ (1:21:09) Header Component - Styles
- ⌨️ (1:25:40) Home Component - Scaffold
- ⌨️ (1:33:45) Short about built-in hooks in React
- ⌨️ (1:38:55) Fetch data from the API for Home Page
- ⌨️ (1:52:44) Custom hook for Home Page
- ⌨️ (1:59:49) HeroImage Component
- ⌨️ (2:11:22) HeroImage Component - Styles
- ⌨️ (2:20:23) Grid Component
- ⌨️ (2:26:06) Grid Component - Styles
- ⌨️ (2:29:44) Thumb Component
- ⌨️ (2:34:59) Thumb Component - Styles
- ⌨️ (2:37:28) Spinner Component
- ⌨️ (2:42:03) SearchBar Component
- ⌨️ (2:57:54) SearchBar Component - Styles
- ⌨️ (3:02:16) SearchBar Component - Logic
- ⌨️ (3:06:51) Button Component
- ⌨️ (3:10:42) Button Component - Styles
- ⌨️ (3:13:06) Button Component - Logic
- ⌨️ (3:19:50) Short about React Router
- ⌨️ (3:21:59) Routing with React Router
- ⌨️ (3:34:15) Movie Component - Scaffold
- ⌨️ (3:36:26) Fetch movie data from the API
- ⌨️ (3:49:38) BreadCrumb Component
- ⌨️ (3:54:49) BreadCrumb Component - Styles
- ⌨️ (3:57:46) MovieInfo Component
- ⌨️ (4:08:41) MovieInfo Component - Styles
- ⌨️ (4:17:35) MovieInfoBar Component
- ⌨️ (4:23:26) MovieInfoBar Component - Styles
- ⌨️ (4:26:38) Actor Component
- ⌨️ (4:32:09) Actor Component - Styles
- ⌨️ (4:34:16) Short about PropTypes
- ⌨️ (4:37:38) Validate Props with PropTypes
- ⌨️ (4:48:17) Short about SessionStorage
- ⌨️ (4:50:32) SessionStorage - Home
- ⌨️ (4:59:34) SessionStorage - Movie
- ⌨️ (5:03:17) Build and prepare for Netlify
- ⌨️ (5:05:58) Netlify drag and drop and Netlify CLI
- ⌨️ (5:10:29) Netlify Continous Deployment
- ⌨️ (5:13:48) Bonus - Classes - SearchBar Component
- ⌨️ (5:22:04) Bonus - Classes - Home Component
- ⌨️ (5:33:14) Bonus - Classes - Movie Component
- ⌨️ (5:40:39) Bonus - Typescript - Introduction
- ⌨️ (5:42:20) Bonus - Typescript - Bootstrap project and copy files
- ⌨️ (5:47:19) Bonus - Typescript - Refactor base files
- ⌨️ (6:04:16) Bonus - Typescript - Refactor Home and Components
- ⌨️ (6:14:55) Bonus - Typescript - Refactor Movie and Components
- ⌨️ (6:25:52) Bonus - Login - Short about TMDB login and rating system
- ⌨️ (6:29:25) Bonus - Login - Global Context
- ⌨️ (6:34:34) Bonus - Login - Login Component
- ⌨️ (6:50:49) Bonus - Login - Login Component - Styles
- ⌨️ (6:53:47) Bonus - Login - Login from Header
- ⌨️ (7:00:27) Bonus - Login - Rate Component
- ⌨️ (7:04:35) Bonus - Login - Rating from MovieInfo
