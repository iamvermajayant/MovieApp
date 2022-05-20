import React from 'react'
import './Movielist.css';

const MovieList = (props) => {
  const Addlist = props.Addlist
  return (
    <>
        {props.movies.map((movie, index) => 
        <div key={index} className="image-container d-flex justify-content-start mt-2 mb-4" style={{width : '360px'}} >
            <img src={movie.Poster} alt={movie.Title} />
            <div onClick={() => props.handleAddList(movie)} className="overlay d-flex align-items-center justify-content-center">
              <Addlist/>
            </div>
        </div>)}
    </>
  )
}

export default MovieList