const InitialSeat = {
  booked: [],
};
const ChangeBookedSeat = (state = InitialSeat, action: any) => {
  switch (action.type) {
    case 'BookedSeat': {
      //  console.log('action se: ', action.payload);
      return {
        ...state,
        booked: action.payload,
      };
    }
    default:
      return state;
  }
};
export {InitialSeat, ChangeBookedSeat};
