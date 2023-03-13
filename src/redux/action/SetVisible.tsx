export const SetVisible = (newVisibleState: any) => {
  return {
    type: 'change_visible',
    payload: newVisibleState,
  };
};
