import React from 'react';

const MovieCard = ({movie, overview}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="card text_center bg-secendary mb-3">
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/>
: null
    }
<h5>{movie.title}</h5>
<p>{movie.overview}</p>
        </div>
    );
};

export default MovieCard;