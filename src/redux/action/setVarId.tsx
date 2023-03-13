export const setVarId = (newVisibleState: number) => {
  return {
    type: 'SetVarId',
    payload: newVisibleState,
  };
};
