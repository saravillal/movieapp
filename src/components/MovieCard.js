import React from 'react';

const MovieCard = ({movie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    console.log(movie)
    return (
        <div className="card">
            {movie.poster_path ? <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="" className="poster"/>
: null
    }
    <div className="movie-details">
        <div className="box">
            <div className="movieTitle">
<h5>{movie.title}</h5>
<h6>{movie.original_title}</h6>
</div>
<div className="overview">
<h3>Overview</h3>
<div className="rating">{movie.vote_average}</div>
<p>{movie.overview}</p>

</div>
        </div>
        </div>
        </div>
        
    );
};

export default MovieCard;