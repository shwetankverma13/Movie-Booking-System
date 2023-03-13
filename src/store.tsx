import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ChangeBookingStatus} from './redux/reducer/ChangeBookingStatus';
import {ChangeLangIndex} from './redux/reducer/ChangeLangIndex';
import {changeLanguage} from './redux/reducer/changeLanguage';
import {ChangeMovieData} from './redux/reducer/ChangeMovieData';
import {ChangeMovieId} from './redux/reducer/ChangeMovieId';
import {ChangeSeatId} from './redux/reducer/ChangeSeatId';
import {ChangeTheatreData} from './redux/reducer/ChangeTheatreData';
import {ChangeTotalCost} from './redux/reducer/ChangeTotalCost';
import {ChangeVaribleId} from './redux/reducer/ChangeVaribleId';
import {ChangeVaribleTimeId} from './redux/reducer/ChangeVaribleTimeId';
import {ChangeVisible} from './redux/reducer/ChangeVisible';
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
