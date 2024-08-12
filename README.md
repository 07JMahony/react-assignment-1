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
+ Trending movies - movies/trending
+ Top rated movies = movies/topRated

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
