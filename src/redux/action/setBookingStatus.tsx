export const setBookingStatus = (newBookingStatus: any) => {
  return {
    type: 'ChangeBookingStatus',
    payload: newBookingStatus,
  };
};
