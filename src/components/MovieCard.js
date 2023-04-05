import React from 'react';

const MovieCard = ({movie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    console.log(movie)
    return (
        <div className="card text_center bg-secendary mb-3">
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/>
: null
    }
<h5>{movie.title}</h5>
<h5>{movie.original_title}</h5>
<p>{movie.overview}</p>
<p>{movie.popularity}</p>
        </div>
    );
};

export default MovieCard;