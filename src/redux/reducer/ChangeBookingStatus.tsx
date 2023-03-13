const InitialBookingStatus = {
  isBookingSuccess: 'false',
};
const ChangeBookingStatus = (state = InitialBookingStatus, action: any) => {
  switch (action.type) {
    case 'ChangeBookingStatus':
      return {
        ...state,
        isBookingSuccess: action.payload,
      };
    default:
      return state;
  }
};
export {InitialBookingStatus, ChangeBookingStatus};
