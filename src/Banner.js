import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrendingMovie);

            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
            );

            return request;
        }
        fetchData();
    }, []);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner" style={
            {
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
                backgroundPosition: "50% 50%",

            }
        }>

            <div className="banner__contents">

                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="play__button">Play</button>
                    <button className="more__button">More Info</button>
                </div>
                <h4 className="banner__description">{truncate(movie?.overview, 200)}</h4>

            </div>
            <div className="fadeBottom"></div>
        </header>
    );
}

export default Banner
