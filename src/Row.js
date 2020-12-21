import React, { useState, useEffect } from "react";
import axios from "./axios"; //also 'instance' but since it used 'export DEFAULT' it could have an alias
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
/* TODO : fix: trending tv shows do not get trailers*/
/* TODO : fix: double click on img on intiial load */

/* TODO : onfocus play banner*/
/* TODO : card on hover */
const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //react hook
  let [trailerURL, setTrailerURL] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playersVars: {
      autoPlay: 1
    }
  }

  const handleClick = (movie) => {
    console.log("Clicked", movie?.original_title || movie?.name);
    if (trailerURL) {
      setTrailerURL('');
    } else {
      movieTrailer(movie?.original_title || movie?.name || "")
        .then((url) => { //whole youtube link 
          const urlParams = new URLSearchParams(new URL(url).search); //contains the url
          setTrailerURL(urlParams.get('v')); //parses the v value
          console.log("Clicked", url);
        }).catch((error) => console.log(error));
    }

  };


  return (
    <div className="row">
      <h2 style={{ padding: "10px" }}>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} //solves the warning: Each child in a list should have a unique "key" prop. Also helps in loading the images, notice the slight difference when you comment this out.
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${imageBaseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.original_title}

          />
        ))}
      </div>

      {trailerURL != '' && <Youtube videoId={trailerURL} opts={opts} />}
    </div>


  );
}

export default Row;
