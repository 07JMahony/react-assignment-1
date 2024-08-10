import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import { Pagination } from "@mui/material";
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";




const UpcomingMoviesPage = () => {


  const [currentPage, setCurrentPage] = useState(1);

  const {  data, error, isLoading, isError }  = useQuery(['upcoming',currentPage], () => getUpcomingMovies(currentPage));

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const totalPages = data.total_pages;



  return (
    <>
    <PageTemplate
      title="Latest Movies"
      movies={movies}
      action={(movie) => <PlaylistAddIcon movie={movie} />}
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

export default UpcomingMoviesPage;
