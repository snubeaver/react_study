import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  return (
    <div>
      <MoviePoster poster={props.poster} />
      <h1>{props.title}</h1>
    </div>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie
