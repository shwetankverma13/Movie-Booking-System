export const setDateIndex = (newVisibleSeats: any) => {
  return {
    type: 'dateIndex',
    payload: newVisibleSeats,
  };
};
