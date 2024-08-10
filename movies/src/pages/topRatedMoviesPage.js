import React, {useState} from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import {getTopRatedMovies} from '../api/tmdb-api';
import { Pagination } from "@mui/material";

const TopRatedMoviesPage = () => {

  const [currentPage, setCurrentPage] = useState(1);

    const {data, error, isLoading, isError}  = useQuery(['top rated',currentPage], () => getTopRatedMovies(currentPage)); 
  
    if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  


    const movies = data.results;
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };
    const totalPages = data.total_pages;
  
  
    return (
      <>
    <PageTemplate
      title="Top Rated Movies"
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
  export default TopRatedMoviesPage; 