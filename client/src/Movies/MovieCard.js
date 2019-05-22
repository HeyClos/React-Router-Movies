import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <div>{props.director}</div>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;
