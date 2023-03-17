export const fetchTOM = (newMovies: any) => {
  return {
    type: 'getTOM',
    payload: newMovies,
  };
};
