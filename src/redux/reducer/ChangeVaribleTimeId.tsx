const InitialTimeId = {
  varTimeId: 0,
};
const ChangeVaribleTimeId = (state = InitialTimeId, action: any) => {
  switch (action.type) {
    case 'SetVarTimeId':
      return {
        ...state,
        varTimeId: action.payload,
      };
    default:
      return state;
  }
};
export {InitialTimeId, ChangeVaribleTimeId};
