const API_KEY = "5d59a288e46256690c7265fd14c67d24";

//ENDPOINTS

const requests = {
    fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchPinoyDramas: `/discover/movie?api_key=${API_KEY}&language=en-US&region=PH&sort_by=release_date.desc&with_genres=18`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
}

export default requests;