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
const setLanguage = (newVisibleState: any) => {
  return {
    type: 'setLanguage',
    payload: newVisibleState,
  };
};
const setSeats = (newVisibleSeats: any) => {
  return {
    type: 'setSeats',
    payload: newVisibleSeats,
  };
};
const setCost = (newVisibleSeats: any) => {
  return {
    type: 'TotalCost',
    payload: newVisibleSeats,
  };
};
const setLangIndex = (newVisibleSeats: any) => {
  return {
    type: 'langIndex',
    payload: newVisibleSeats,
  };
};
const setMovieId = (newVisibleSeats: any) => {
  return {
    type: 'SetMovieId',
    payload: newVisibleSeats,
  };
};
const setBookingStatus = (newBookingStatus: any) => {
  return {
    type: 'ChangeBookingStatus',
    payload: newBookingStatus,
  };
};
const fetchMovies = (newMovies: any) => {
  return {
    type: 'getMovies',
    payload: newMovies,
  };
};
const fetchTheatre = (newTheatre: any) => {
  return {
    type: 'getTheatre',
    payload: newTheatre,
  };
};
export {
  SetVisible,
  SetMovies,
  SetTheatre,
  setLangIndex,
  setVarId,
  setVarTimeId,
  setLanguage,
  setSeats,
  setCost,
  setMovieId,
  setBookingStatus,
  fetchMovies,
  fetchTheatre,
};
