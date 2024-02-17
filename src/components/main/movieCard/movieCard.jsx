import React from "react";
import "./movieCard.css";
import dummyImage from "../../../assets/dummyImage.jpg";

const MovieCard = ({ movie, handleClick }) => {
  return (
    <div className="movie-card" onClick={()=>handleClick(movie)}>
    <div className="image-container">
      {movie.primaryImage && movie.primaryImage.url ? (
        <img src={movie.primaryImage.url} alt={movie.titleText.text} />
      ) : (
        <img src={dummyImage} alt="No Image" />
      )}
      <div className="overlay">
        <div className="title">{movie.titleText.text}</div>
        {movie.releaseYear && (
          <span className="hd-tag">{movie.releaseYear.year}</span>
        )}
        <span className="movie-type">{movie.titleType.text}</span>
      </div>
      <div className="play-button">&#9658;</div>
    </div>
  </div>
  
  );
};

export default MovieCard;
