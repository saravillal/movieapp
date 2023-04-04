import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from "axios";


function TopTen(props){
  const [movies, setMovies] = useState([]);  
  const api_key = "670ab1cd0ceaf592ba7be80c8098630f";
  
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES`)
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movies]);

  let moviesPagination = movies.slice(0, 10);

  return(
    <div className="App">
        <h1>Top 10 Movies</h1>
        <div className="container">
    <div className="grid">
      {moviesPagination.map((movie, index) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        />
      ))}
      </div>
    </div>
    </div>
  );
}



export default TopTen;