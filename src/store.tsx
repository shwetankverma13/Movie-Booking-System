import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ChangeBookingStatus} from './redux/reducer/ChangeBookingStatus';
import {ChangeDayDate} from './redux/reducer/ChangeDateDay';
import {ChangeDateIndex} from './redux/reducer/ChangeDateIndex';
import {ChangeLangIndex} from './redux/reducer/ChangeLangIndex';
import {changeLanguage} from './redux/reducer/changeLanguage';
import {ChangeMovieData} from './redux/reducer/ChangeMovieData';
import {ChangeMovieId} from './redux/reducer/ChangeMovieId';
import {ChangeSeatId} from './redux/reducer/ChangeSeatId';
import {ChangeTheatreData} from './redux/reducer/ChangeTheatreData';
import {ChangeTheatreOfMovieData} from './redux/reducer/ChangeTheatreOfMovies';
import {ChangeTotalCost} from './redux/reducer/ChangeTotalCost';
import {ChangeVaribleId} from './redux/reducer/ChangeVaribleId';
import {ChangeVaribleTimeId} from './redux/reducer/ChangeVaribleTimeId';
import {ChangeVisible} from './redux/reducer/ChangeVisible';

// import {legacy_createStore as createStore} from 'redux';
const rootReducer = combineReducers({
  ChangeVisible,
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
  ChangeDayDate,
  ChangeDateIndex,
  ChangeTheatreOfMovieData,
});
export const store = createStore(rootReducer);
