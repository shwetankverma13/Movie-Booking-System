import {
  ChangeVisible,
  // ChangeMovie,
  // ChangeTheatre,
  ChangeLangIndex,
  ChangeVaribleId,
  ChangeVaribleTimeId,
  changeLanguage,
  ChangeSeatId,
  ChangeTotalCost,
  ChangeMovieId,
  ChangeBookingStatus,
  ChangeMovieData,
  ChangeTheatreData,
} from './redux/reducer';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import {legacy_createStore as createStore} from 'redux';
const rootReducer = combineReducers({
  ChangeVisible,
  // ChangeTheatre,
  // ChangeMovie,
  ChangeVaribleId,
  ChangeLangIndex,
  ChangeVaribleTimeId,
  changeLanguage,
  ChangeSeatId,
  ChangeTotalCost,
  ChangeMovieId,
  ChangeBookingStatus,
  ChangeMovieData,
  ChangeTheatreData,
});
export const store = createStore(rootReducer);
