import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from './Nav';
import Banner from './Banner'

function App() {
  return (


    <div className="app">
      <Nav />
      <Banner />


      <Row title="Trending Now" fetchUrl={requests.fetchTrendingMovie} isLargeRow />
      <Row title="Trending TV Shows" fetchUrl={requests.fetchTrendingTV} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/*  <Row title="Exciting Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
      {/* <Row title="Pinoy Dramas" fetchUrl={requests.fetchPinoyDramas} /> */}
    </div>
  );
}

export default App;
