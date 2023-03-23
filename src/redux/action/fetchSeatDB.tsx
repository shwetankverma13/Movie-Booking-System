export const fetchSeatDB = (newMovies: any) => {
  return {
    type: 'BookedSeat',
    payload: newMovies,
  };
};
