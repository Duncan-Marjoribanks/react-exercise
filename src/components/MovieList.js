import React from 'react';
import Movie from './Movie.js';


class MovieList extends React.Component {
  render() {

    const movieComponents = this.props.data.map((movie, index) => {
      return <Movie title={movie.title} key={index}>{movie.title}</Movie>
    });

    return (
      <div className="movie-list">
        {movieComponents}
      </div>
    )
  };
};


export default MovieList;
