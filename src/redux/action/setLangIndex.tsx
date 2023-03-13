export const setLangIndex = (newVisibleSeats: any) => {
  return {
    type: 'langIndex',
    payload: newVisibleSeats,
  };
};
