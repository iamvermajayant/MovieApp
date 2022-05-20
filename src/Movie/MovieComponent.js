import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieComponent.css";
import SearchMovie from "./SearchMovie";
import AddList from "./AddList";
import RemoveList from "./RemoveList";

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [addMovieList, setAddMovieList] = useState([]);
  

  const getMovies = async (search) => {
    //const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://www.omdbapi.com/?s=${search}&apikey=f9533fcf`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  useEffect(() => {
    const MoviesList = JSON.parse(localStorage.getItem('movie-app-list'));
   

    if(MoviesList){
      setAddMovieList(MoviesList);
    }
  },[])

  const addToLocalStorage = (item) => {
    localStorage.setItem('movie-app-list', JSON.stringify(item));
  }

  const addMovieListHandle = (movies) => {
    const newList = [...addMovieList, movies];
    setAddMovieList(newList);
    addToLocalStorage(newList);
  };

  const removeMovieListHandle = (movies) => {
    const newList = addMovieList.filter((addMovieList) => addMovieList.imdbID !== movies.imdbID);

    setAddMovieList(newList);
  }
  return (
    <div className="container-fluid movie-app mt-3">
      <div className="heading d-flex justify-content-between align-items-center mt-5">
        <h2>Movies</h2>
        <SearchMovie search={search} setSearch={setSearch} />
      </div>
      <div className="row d-flex">
        <MovieList
          Addlist={AddList}
          movies={movies}
          handleAddList={addMovieListHandle}
        />
      </div>
      <div className="heading d-flex justify-content-between align-items-center mt-5">
        <h2>WatchList</h2>
      </div>
      <div className="row d-flex">
        <MovieList
          Addlist={RemoveList}
          movies={addMovieList}
          handleAddList={removeMovieListHandle}
        />
      </div>
    </div>
  );
};

export default MovieComponent;
