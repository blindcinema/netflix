const key = "16b726ac0b2e8c0959f91f7de64b76c0";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_MOVIE_BEARER
    }
  };

const requests = {
    requestPopular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    requestTopRated: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    requestNowPlaying: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    requestUpcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
}

export { options, requests }