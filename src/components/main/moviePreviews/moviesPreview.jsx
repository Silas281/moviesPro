// MoviePosterPreview.js
import React, { useState, useEffect } from "react";
import "./moviePreviews.css";
import MovieCard from "../movieCard/movieCard";
import Loader from "../../common/loader/loader";
import { fetchData } from "../../../utils/api/fetchMovies";
import noData from "../../../assets/no-data.png";

const MoviePosterPreview = () => {
  /**
   * Initialize State data - Movies, Current Page and Loading state
   */
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  /**
   * This useEffect hook will handle fetching movies
   */
  useEffect(() => {
    setLoading(true);
    fetchData(currentPage)
      .then((data) => {
        // console.log(data);
        setMovies((prevMovies) => [...prevMovies, ...data]);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));

     
  }, [currentPage]);

  /**
   * Track scroll location to set next page data when scrolled to the bottom
   */
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  //set Next Page on scroll bottom
  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);
    //clean up
    return () => window.removeEventListener("scroll", handleClick);
  }, []);

  /**
   *
   * @param {*} movie - Handle navigation to movie details page (console log)
   */
  function handleClick(movie) {
    console.log(movie); // Pass movie data to new page
  }

  return (
    <>
      <div>
        {/**IF No Movie Data */}
        {movies.length==0?<div className="empty-container">
          <h1>No Movies</h1>
          <img src={noData} alt="No Data" />
        </div>
        
        :
        
        <div className="container movies-grid">
          {/**IF there is Movie Data */}
          {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            handleClick={handleClick}
            key={movie._id + index}
          />
        ))}
        </div> 
        }
        
        
      </div>
      {/**Loader */}
      {loading && <Loader />}
    </>
  );
};

export default MoviePosterPreview;
