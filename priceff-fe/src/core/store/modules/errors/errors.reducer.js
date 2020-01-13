import createReducer from '../../../helpers/redux/create-reducer';
import * as actionType from './errors.const';

const initialState = {
  lastError: null,
  errors: []
};

export const errors = createReducer(initialState, {
  [actionType.SET_ERROR]: (state, payload) => {
    return ({
      ...state,
      errors: [...state.errors, payload.payload],
      lastError: payload.payload
    });
  }
});

