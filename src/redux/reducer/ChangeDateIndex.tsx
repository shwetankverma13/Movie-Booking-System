const InitialDateClick = {
  dateIndex: 0,
};
const ChangeDateIndex = (state = InitialDateClick, action: any) => {
  switch (action.type) {
    case 'dateIndex':
      return {
        ...state,
        dateIndex: action.payload,
      };
    default:
      return state;
  }
};
export {InitialDateClick, ChangeDateIndex};
