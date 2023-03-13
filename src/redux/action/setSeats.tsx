export const setSeats = (newVisibleSeats: any) => {
  return {
    type: 'setSeats',
    payload: newVisibleSeats,
  };
};
