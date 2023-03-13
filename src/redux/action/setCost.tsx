export const setCost = (newVisibleSeats: any) => {
  return {
    type: 'TotalCost',
    payload: newVisibleSeats,
  };
};
