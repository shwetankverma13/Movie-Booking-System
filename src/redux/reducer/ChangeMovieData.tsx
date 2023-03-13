const InitalMovie = {
  MovieData: [],
};
const ChangeMovieData = (state = InitalMovie, action: any) => {
  switch (action.type) {
    case 'getMovies':
      return {
        MovieData: [...state.MovieData, action.payload],
      };
    default:
      return state;
  }
};
export {InitalMovie, ChangeMovieData};
