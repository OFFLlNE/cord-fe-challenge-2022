## Contribution

1. `npm i`
2. `npm start` to start the [development environment](#development-environment) and visually see your changes
3. Make your changes
4. Open a new branch, commit your changes, open PR
5. Get PR reviewed and then merge

## Development environment

1. Run `npm start` (make sure to have ran `npm i` before)
2. Local website will run on http://localhost:3000/ where you can see your changes made live

## Tests (TBD)

We expect you to cover all added functionalities with tests.

# cord Coding Challenge (Front-end)

### Introduction

Welcome! This coding challenge is designed to explore your React & SCSS Front-end skills. You will have to create a simple SPA based on the provided mockup and make a few API calls to a public web API.

### The challenge

You have to complete the test and write any necessary code so that the discover page looks like this [mockup] designs. All the images/icons you need are already imported and you can find them under the `images` folder.

The discover page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable/collapsable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon, and back when the user clicks on a close icon or outside the `SideBar`. In addition, you have to add all the responsive stylesheets for the app to run smoothly on mobile devices.

PS. Once you've completed the test follow all the `TODO` comments to make sure you have implemented all required functionality.

Movie data can be queried via [theMovieDB]:

- Popular movies API doc: [popularMovies]
- Movie Genres API doc: [movieGenres]
- Search movies API doc: [searchMovies]

Packages & Technologies used in the repo:

- `axios`
- `sass`
- `react-router-dom`
- `styled-components`

### Submission guide

Please fork this repo and drop your contact person a note once you are done

### How we review

- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? Are all the required interactions implemented? Is your web app accessible? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account? Weight: 25%
- **Code quality**: Is the code easy to understand, maintain and scale? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, React and SCSS? Weight: 15%
- **Performance**: Does the UI render quickly with no performance issues? Have you ensured that API requests do not fire so often that they can brick browser performance? Weight: 10%

### Bonus points

- **Automated Tests** - Are there any automated tests?
- **Documentation** - Is the README well written? Are the commit messages clear?
- **Reporting** - React Profiler report with demonstrated knowledge of reading / reporting performance data
- **Production-readiness** - Is there proper error handling? Is the code ready to put into production? Code-Splitting?
- **Future-readiness** - React Hooks? Web workers? PWA? Client-side caching?

[mockup]: https://cord-coding-challenges.s3-eu-west-1.amazonaws.com/frontend-test-mockups.zip
[themoviedb]: https://www.themoviedb.org/documentation/api
[popularmovies]: https://developers.themoviedb.org/3/movies/get-popular-movies
[moviegenres]: https://developers.themoviedb.org/3/genres/get-movie-list
[searchmovies]: https://developers.themoviedb.org/3/search/search-movies
