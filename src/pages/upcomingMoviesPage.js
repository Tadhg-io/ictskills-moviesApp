import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import AddToListIcon from '../components/cardIcons/addToPlaylist';
import Spinner from '../components/spinner';

const UpcomingMoviesPage = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  // Redundant, but necessary to avoid app crashing.
  const favorites = [];
  localStorage.setItem('favorites', JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToListIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;