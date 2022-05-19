import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import './MovieComponent.css';
import SearchMovie from "./SearchMovie";

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
      const url = 'http://www.omdbapi.com/?s=avengers&apikey=f9533fcf';

      const response = await fetch(url);
      const responseJson = await response.json();

      console.log(responseJson);
      setMovies(responseJson.Search);
  };

  useEffect(() => {
      getMovies();
  },[]);

  return <div className="container-fluid movie-app mt-3">
        <div className="heading d-flex justify-content-between">
            <h2>Movies</h2>
            <SearchMovie/>
        </div>
        <div className="row d-flex">
        <MovieList movies={movies}/>
        </div>
  </div>;
};

export default MovieComponent;
