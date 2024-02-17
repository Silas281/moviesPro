// MoviePosterPreview.js
import React, { useState, useEffect } from "react";
import "./moviePreviews.css";
import MovieCard from "../movieCard/movieCard";
import Loader from "../../common/loader/loader";
import { fetchData } from "../../../utils/api/fetchMovies";


const MoviePosterPreview=()=> {

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
  const handleScroll=()=> {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

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
    <div className="container movies-grid">
      {movies.map(
        (movie, index) =>
            <MovieCard movie={movie} handleClick={handleClick} key={movie._id+index}/>
      )}


    </div>
    {loading && <Loader />}
    </>
  );
}

export default MoviePosterPreview;
