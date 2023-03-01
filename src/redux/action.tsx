const SetVisible = (newVisibleState: any) => {
  return {
    type: 'change_visible',
    payload: newVisibleState,
  };
};
const SetMovies = () => {
  return {};
};
const SetTheatre = () => {
  return {};
};
const setVarId = (newVisibleState: number) => {
  return {
    type: 'SetVarId',
    payload: newVisibleState,
  };
};
const setVarTimeId = (newVisibleState: number) => {
  return {
    type: 'SetVarTimeId',
    payload: newVisibleState,
  };
};
export default {SetVisible, SetMovies, SetTheatre, setVarId, setVarTimeId};
