export const setSelectedSeats = (newVisibleState: any) => {
  return {
    type: 'SetSeatSelected',
    payload: newVisibleState,
  };
};
