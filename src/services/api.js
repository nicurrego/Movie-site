const API_KEY = "e6f6ce65b446ca9c3be4e14ac1004e74";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
  const data = await response.json();
  return data.results;
};
