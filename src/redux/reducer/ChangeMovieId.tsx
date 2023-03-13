const InitialMovieId = {
  movieId: 0,
};
const ChangeMovieId = (state = InitialMovieId, action: any) => {
  switch (action.type) {
    case 'SetMovieId':
      return {
        ...state,
        movieId: action.payload,
      };
    default:
      return state;
  }
};
export {InitialMovieId, ChangeMovieId};
