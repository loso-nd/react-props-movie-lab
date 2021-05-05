import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
/**
 * Iterate over the array of movie data and then render one MovieCard component each time using the data from the array you're iterating over.
 */

generateMovieCards = () => {
// map over your movieData array and return an array of the correct JSX
    //console.log(movieData)
    return movieData.map(data => {
      return (
        <div>
          <MovieCard title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster} key={data.id}/> 
        </div>
      )
  })
}

  render() {
   // console.log(this.generateMovieCards())
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>

    )
  }
}


/**
 * 
 * movieData - an array of object which we can chain .map() and return the JSX of the <MovieCard /> passing in the necessary props. 
 * 
 * What is happening?
 * - we have access to the data, but how are we going to use the data?
 * - we create a function to get acccess to the individual properties inside the data, which we can do by .map(), then we can use is of those propertiesand pass it into MovieCard. 
 * inside our render function is where we returrn the function 
 */