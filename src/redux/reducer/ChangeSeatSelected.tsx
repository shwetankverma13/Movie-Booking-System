const InitialBooked = {
  selectedSeats: '',
};
const ChangeSeatSelected = (state = InitialBooked, action: any) => {
  switch (action.type) {
    case 'SetSeatSelected':
      return {
        ...state,
        selectedSeats: action.payload,
      };
    default:
      return state;
  }
};
export {InitialBooked, ChangeSeatSelected};
