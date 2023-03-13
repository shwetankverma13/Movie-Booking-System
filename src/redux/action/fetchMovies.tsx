export const fetchMovies = (newMovies: any) => {
  return {
    type: 'getMovies',
    payload: newMovies,
  };
};
