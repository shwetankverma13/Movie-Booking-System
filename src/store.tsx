import {
  ChangeVisible,
  ChangeMovie,
  ChangeTheatre,
  ChangeVaribleId,
  ChangeVaribleTimeId,
  changeLanguage,
  ChangeSeatId,
  ChangeTotalCost,
  ChangeMovieId,
  ChangeBookingStatus,
  ChangeMovieData,
} from './redux/reducer';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import {legacy_createStore as createStore} from 'redux';
const rootReducer = combineReducers({
  ChangeVisible,
  ChangeTheatre,
  ChangeMovie,
  ChangeVaribleId,
  ChangeVaribleTimeId,
  changeLanguage,
  ChangeSeatId,
  ChangeTotalCost,
  ChangeMovieId,
  ChangeBookingStatus,
  ChangeMovieData,
});
export const store = createStore(rootReducer);
