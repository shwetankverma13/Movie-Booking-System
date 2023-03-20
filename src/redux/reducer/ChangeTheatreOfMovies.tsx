const InitalTheatreOfMovie = {
  tomData: [],
};
const ChangeTheatreOfMovieData = (
  state = InitalTheatreOfMovie,
  action: any,
) => {
  switch (action.type) {
    case 'getTOM': {
      //  console.log('action se: ', action.payload);
      return {
        ...state,
        tomData: action.payload,
      };
    }
    default:
      return state;
  }
};
export {InitalTheatreOfMovie, ChangeTheatreOfMovieData};
