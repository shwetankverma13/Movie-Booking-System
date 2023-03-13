export const setVarTimeId = (newVisibleState: number) => {
  return {
    type: 'SetVarTimeId',
    payload: newVisibleState,
  };
};
