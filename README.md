# Assignment 1 - ReactJS app.

Name: John O'Mahony

## Overview.

A basic ReactJS web app that fetches from the TMDB API that builds on what was made in labs by added more endpoints, features and functionality.

### Features.
 
+ Pagination on all pages
+ Latest movies page
+ Trending movies page
+ Top rated movies page

## Setup requirements.

Run npm install

## API endpoints. 


+ Latest movies - https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}
+ Trending movies - https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
+ Top rated movies - https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/topRated - displays the highest rated movies of all time.
+ /movies/trending - displays currently popular movies.
+ /movies/latest - displays the newest movies available.


## Independent learning

Pagination - https://mui.com/material-ui/react-pagination/
