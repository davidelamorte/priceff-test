import createReducer from '../../../helpers/redux/create-reducer';
import * as actionType from './populations.const';

const initialState = {
  currentPopulation: null,
  populationsIdsList: [],
};

export const populations = createReducer(initialState, {
  [actionType.STORE_POPULATION_ID]: (state, action) => {
    return ({
      ...state,
      populationsIdsList: [...state.populationsIdsList, action.payload]
    });
  },
  [actionType.SET_CURRENT_POPULATION]: (state, action) => {
    return ({
      ...state,
      currentPopulation: action.payload
    });
  }
});

