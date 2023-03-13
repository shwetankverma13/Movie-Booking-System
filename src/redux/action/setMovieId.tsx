export const setMovieId = (newVisibleSeats: any) => {
  return {
    type: 'SetMovieId',
    payload: newVisibleSeats,
  };
};
