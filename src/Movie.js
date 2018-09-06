import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Poster">
        <MoviePoster poster = {poster} alt={title}/>
      </div>
      <div className="Description">
        <h1>{title}</h1>
        <div className="Genre">
          {genres.map((genre, index)=> <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Syn">{synopsis}</p>
      </div>
      
      
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt}/>
  )
}

function MovieGenre({genre}){
  return(
    <span className="Genre">{genre}</span>
  )
}
Movie.propTypes ={
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}
export default Movie;
