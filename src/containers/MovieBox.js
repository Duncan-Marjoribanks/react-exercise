import React from 'react';
import MovieList from '../components/MovieList.js';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        Title: "Star-Wars"
        
      }]
    };
  };

  render() {
    return (
      <div>
        <h2>UK Opening this week</h2>
        <MovieList data={this.state.data} />
      </div>
    )
  };
}

export default MovieBox;
