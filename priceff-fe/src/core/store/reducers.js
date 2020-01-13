import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {populations} from 'core/store/modules/populations/populations.reducer';
import {errors} from 'core/store/modules/errors/errors.reducer';

export const reducers = (history) => combineReducers({
  router: connectRouter(history),
  populations,
  errors
});