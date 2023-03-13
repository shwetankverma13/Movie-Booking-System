const InitalTheatre = {
  TheatreData: [],
};
const ChangeTheatreData = (state = InitalTheatre, action: any) => {
  switch (action.type) {
    case 'getTheatre':
      return {
        TheatreData: [...state.TheatreData, action.payload],
      };
    default:
      return state;
  }
};
export {InitalTheatre, ChangeTheatreData};
