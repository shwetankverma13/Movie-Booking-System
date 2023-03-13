const InitialVarId = {
  varId: 0,
};
const ChangeVaribleId = (state = InitialVarId, action: any) => {
  switch (action.type) {
    case 'SetVarId':
      return {
        ...state,
        varId: action.payload,
      };
    default:
      return state;
  }
};
export {InitialVarId, ChangeVaribleId};
