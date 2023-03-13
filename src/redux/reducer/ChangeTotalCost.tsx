const InitialCost = {
  costID: 0,
};
const ChangeTotalCost = (state = InitialCost, action: any) => {
  switch (action.type) {
    case 'TotalCost':
      return {
        ...state,
        costID: action.payload,
      };
    default:
      return state;
  }
};
export {InitialCost, ChangeTotalCost};
