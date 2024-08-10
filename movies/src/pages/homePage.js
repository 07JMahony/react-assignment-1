import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const HomePage = (props) => {

  const [currentPage, setCurrentPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['discover',currentPage], () => getMovies(currentPage));

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const totalPages = data.total_pages;

  return (
    <>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
    <Pagination
      style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}
      count={totalPages}
      color="secondary"
      onChange={handlePageChange}
      page={currentPage}
      size="large"
    />
  </>
  );
};
export default HomePage;