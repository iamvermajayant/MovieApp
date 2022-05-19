import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index) => 
        <div className="d-flex justify-content-start" style={{width : '360px'}} >
            <img src={movie.Poster} alt={movie.Title} />
        </div>)}
    </>
  )
}

export default MovieList