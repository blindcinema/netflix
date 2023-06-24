const key = "16b726ac0b2e8c0959f91f7de64b76c0";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmI3MjZhYzBiMmU4YzA5NTlmOTFmN2RlNjRiNzZjMCIsInN1YiI6IjY0OGYyOTYzMmY4ZDA5MDBjNjY2NGE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Md3cwyPfDWDhq2tglHGfsR_ddjDXnt-cwcp8xDERI7c'
    }
  };

const requests = {
    requestPopular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    requestTopRated: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    requestNowPlaying: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    requestUpcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
}

export { options, requests }