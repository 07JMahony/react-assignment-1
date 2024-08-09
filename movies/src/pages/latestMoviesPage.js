import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getLatestMovies} from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'





const LatestMoviesPage = () => {


  const {  data, error, isLoading, isError }  = useQuery('latest', getLatestMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const latestMovies = movies.filter(m => m.latestMovies)
  localStorage.setItem('latestMovies', JSON.stringify(latestMovies))



  return (
    <PageTemplate
      title='Latest Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default LatestMoviesPage;
